using doan.ProjectManagement.Entities;
using doan.ProjectManagement.Localization;
using doan.ProjectManagement.Permissions;
using doan.ProjectManagement.Teachers.Dto;
using Microsoft.Extensions.Localization;
using System;
using System.Linq;
using System.Linq.Dynamic.Core;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.Domain.Repositories;

namespace doan.ProjectManagement.Teachers
{
    public class TeacherAppService : BaseAppService<
        Teacher, Guid, CreateUpdateTeacherDto, GetTeacherDto,
        GetTeacherForEditDto, GetTeacherInput>, ITeacherAppService
    {
        private readonly IStringLocalizer<ProjectManagementResource> _localizable;

        public TeacherAppService(IRepository<Teacher, Guid> repository,
            IStringLocalizer<ProjectManagementResource> localizable) : base(repository)
        {
            _localizable = localizable;
        }

        protected override string CreatePolicyName { get; set; } = ProjectManagementPermissions.Teacher.Create;
        protected override string DeletePolicyName { get; set; } = ProjectManagementPermissions.Teacher.Delete;
        protected override string UpdatePolicyName { get; set; } = ProjectManagementPermissions.Teacher.Update;
        protected override string GetListPolicyName { get; set; } = ProjectManagementPermissions.Teacher.Default;
        protected override string GetPolicyName { get; set; } = ProjectManagementPermissions.Teacher.Default;

        protected override IQueryable<Teacher> CreateFilteredQuery(GetTeacherInput input)
        {
            return Repository.WhereIf(!string.IsNullOrWhiteSpace(input.Filter),
                x => x.Name.Contains(input.Filter)
            || x.PhoneNumber.Contains(input.Filter)
            || x.Position.Contains(input.Filter));
        }

        protected override async Task<Teacher> Create(CreateUpdateTeacherDto input)
        {
            if (Repository.Any(x => x.Email == input.Email))
            {
                throw new UserFriendlyException(L["EmailHasAlreadyExists"]);
            }

            if (Repository.Any(x => x.PhoneNumber == input.PhoneNumber))
            {
                throw new UserFriendlyException(L["PhoneNumberShouldBeUnique"]);
            }

            return await base.Create(input);
        }

        protected override async Task<Teacher> Update(CreateUpdateTeacherDto input)
        {

            await CheckUpdatePolicyAsync();

            var entity = await Repository.GetAsync(input.Id.Value);

            if (entity.PhoneNumber != input.PhoneNumber)
            {
                if (Repository.Any(x => x.PhoneNumber == input.PhoneNumber))
                {
                    throw new UserFriendlyException(L["PhoneNumberShouldBeUnique"]);
                }
            }

            if (entity.Email != input.Email)
            {
                if (Repository.Any(x => x.Email == input.Email))
                {
                    throw new UserFriendlyException(L["EmailHasAlreadyExists"]);
                }
            }

            MapToEntity(input, entity);

            await CurrentUnitOfWork.SaveChangesAsync();

            return entity;
        }

    }
}
