using Abp.Application.Services;
using Abp.Domain.Repositories;
using ProjectManagement.Authorization;
using ProjectManagement.Entites;
using ProjectManagement.Projects.Dto;
using System;
using System.Threading.Tasks;

namespace ProjectManagement.Projects
{
    public class ProjectAppService : AsyncCrudAppService<Project, ProjectDto, Guid,
        PagedProjectResultRequestDto, CreateUpdateProjectDto,
        CreateUpdateProjectDto, GetProjectForEditDto>, IProjectAppService
    {
        public ProjectAppService(IRepository<Project, Guid> repository) : base(repository)
        {
        }

        protected override string CreatePermissionName { get; set; } = ProjectPermission.Create;
        protected override string UpdatePermissionName { get; set; } = ProjectPermission.Update;
        protected override string DeletePermissionName { get; set; } = ProjectPermission.Delete;
        protected override string GetAllPermissionName { get; set; } = ProjectPermission.Default;
        protected override string GetPermissionName { get; set; } = ProjectPermission.Default;


        public async Task<Project> GetById(Guid id)
        {
            CheckCreatePermission();
            var entity = await Repository.GetAsync(id);
            if (entity != null)
            {
                return entity;
            }
            return null;
        }

        //public async Task<>
    }
}
