using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Dynamic.Core;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Domain.Entities;
using Volo.Abp.Domain.Repositories;

namespace doan.ProjectManagement
{
    public abstract class BaseAppService<
        TEntity,
        TPrimaryKey,
        TCreateUpdate,
        TViewOutput,
        TEditOutput,
        TGetAllInput> : ProjectManagementAppService, IBaseAppService<TPrimaryKey, TCreateUpdate, TViewOutput, TEditOutput, TGetAllInput>
        where TEntity : Entity<TPrimaryKey>
        where TPrimaryKey : struct
        where TCreateUpdate : EntityDto<TPrimaryKey?>
        where TViewOutput : EntityDto<TPrimaryKey>
        where TEditOutput : EntityDto<TPrimaryKey?>
        where TGetAllInput : PagedAndSortedResultRequestDto
    {
        #region properties
        protected readonly IRepository<TEntity, TPrimaryKey> Repository;
        protected virtual string GetPolicyName { get; set; }
        protected virtual string GetListPolicyName { get; set; }
        protected virtual string CreatePolicyName { get; set; }
        protected virtual string UpdatePolicyName { get; set; }
        protected virtual string DeletePolicyName { get; set; }
        #endregion

        protected BaseAppService(IRepository<TEntity, TPrimaryKey> repository)
        {
            Repository = repository;
        }

        #region check policy

        protected virtual async Task CheckGetPolicyAsync()
        {
            await CheckPolicyAsync(GetPolicyName);
        }

        protected virtual async Task CheckGetListPolicyAsync()
        {
            await CheckPolicyAsync(GetListPolicyName);
        }

        protected virtual async Task CheckCreatePolicyAsync()
        {
            await CheckPolicyAsync(CreatePolicyName);
        }

        protected virtual async Task CheckUpdatePolicyAsync()
        {
            await CheckPolicyAsync(UpdatePolicyName);
        }

        protected virtual async Task CheckDeletePolicyAsync()
        {
            await CheckPolicyAsync(DeletePolicyName);
        }

        #endregion

        #region filter functions
        protected virtual IQueryable<TEntity> CreateFilteredQuery(TGetAllInput input)
        {
            return Repository;
        }
        protected virtual IQueryable<TEntity> CreateFilteredQueryGetAll()
        {
            return Repository;
        }

        #endregion

        #region mapper

        protected virtual TViewOutput MapToViewOutputDto(TEntity entity)
        {
            return ObjectMapper.Map<TEntity, TViewOutput>(entity);
        }
        protected virtual TEditOutput MapToEditOutputDto(TEntity entity)
        {
            return ObjectMapper.Map<TEntity, TEditOutput>(entity);
        }
        protected virtual TEntity MapToEntity(TCreateUpdate createOrEditInput)
        {
            return ObjectMapper.Map<TCreateUpdate, TEntity>(createOrEditInput);
        }
        protected virtual void MapToEntity(TCreateUpdate createOrEditInput, TEntity entity)
        {
            ObjectMapper.Map<TCreateUpdate, TEntity>(createOrEditInput, entity);
        }

        #endregion

        #region create and update

        protected virtual async Task<TEntity> Create(TCreateUpdate input)
        {
            try
            {
                await CheckCreatePolicyAsync();

                var entity = MapToEntity(input);

                await Repository.InsertAsync(entity);

                await CurrentUnitOfWork.SaveChangesAsync();

                return entity;
            }
            catch (Exception e)
            {
                throw e;
            }

        }
        protected virtual async Task<TEntity> Update(TCreateUpdate input)
        {
            try
            {
                await CheckUpdatePolicyAsync();

                var entity = await Repository.GetAsync(input.Id.Value);

                MapToEntity(input, entity);

                await CurrentUnitOfWork.SaveChangesAsync();

                return entity;
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        #endregion

        #region Sorting & Paging

        /// <summary>
        /// Should apply sorting if needed.
        /// </summary>
        /// <param name="query">The query.</param>
        /// <param name="input">The input.</param>
        protected virtual IQueryable<TEntity> ApplySorting(IQueryable<TEntity> query, TGetAllInput input)
        {
            //Try to sort query if available
            if (input is ISortedResultRequest sortInput)
            {
                if (!sortInput.Sorting.IsNullOrWhiteSpace())
                {
                    return query.OrderBy(sortInput.Sorting);
                }
            }

            //Default sorting by id desc
            return query.OrderByDescending(x => x.Id);
        }

        /// <summary>
        /// Should apply paging if needed.
        /// </summary>
        /// <param name="query">The query.</param>
        /// <param name="input">The input.</param>
        protected virtual IQueryable<TEntity> ApplyPaging(IQueryable<TEntity> query, TGetAllInput input)
        {
            //Try to use paging if available
            if (input is IPagedResultRequest pagedInput)
            {
                return query.PageBy(pagedInput);
            }

            //No paging
            return query;
        }

        #endregion

        #region public functions
        public virtual async Task<TEditOutput> Get(TPrimaryKey id)
        {
            await CheckGetPolicyAsync();

            var result = await Repository.GetAsync(id);

            return result == null ? null : MapToEditOutputDto(result);
        }
        public virtual async Task Delete(TPrimaryKey id)
        {
            await CheckDeletePolicyAsync();

            await Repository.DeleteAsync(id);
        }
        public virtual async Task<TPrimaryKey> Save(TCreateUpdate input)
        {
            TEntity entity;
            if (input.Id == null || $"{input.Id}" == "0")
            {
                entity = await Create(input);
            }
            else
            {
                entity = await Update(input);
            }

            return entity.Id;
        }
        public virtual async Task<PagedResultDto<TViewOutput>> GetListPaged(TGetAllInput input)
        {
            await CheckGetListPolicyAsync();

            var query = CreateFilteredQuery(input);

            var totalCount = await AsyncExecuter.CountAsync(query);

            query = ApplySorting(query, input);
            query = ApplyPaging(query, input);

            var result = await AsyncExecuter.ToListAsync(query);

            return new PagedResultDto<TViewOutput>(totalCount, result.Select(MapToViewOutputDto).ToList());
        }
        public virtual async Task<List<TViewOutput>> GetAll()
        {
            try
            {
                var query = CreateFilteredQueryGetAll();
                var entities = await AsyncExecuter.ToListAsync(query);
                return entities.Select(MapToViewOutputDto).ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        #endregion
    }
}

