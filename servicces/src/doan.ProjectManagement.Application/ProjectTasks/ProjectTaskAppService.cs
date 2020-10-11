using doan.ProjectManagement.Entities;
using doan.ProjectManagement.Permissions;
using doan.ProjectManagement.ProjectTasks.Dto;
using System;
using Volo.Abp.Domain.Repositories;

namespace doan.ProjectManagement.ProjectTasks
{
    public class ProjectTaskAppService : BaseAppService<ProjectTask,
        Guid, CreateUpdateProjectTaskDto, GetProjectTaskDto,
        GetProjectTaskForEditDto, GetProjectTaskForInputDto>, IProjectTaskAppService
    {

        protected override string CreatePolicyName { get; set; } = ProjectManagementPermissions.ProjectTask.Create;
        protected override string DeletePolicyName { get; set; } = ProjectManagementPermissions.ProjectTask.Delete;
        protected override string GetListPolicyName { get; set; } = ProjectManagementPermissions.ProjectTask.Default;
        protected override string GetPolicyName { get; set; } = ProjectManagementPermissions.ProjectTask.Default;
        protected override string UpdatePolicyName { get; set; } = ProjectManagementPermissions.ProjectTask.Update;
        public ProjectTaskAppService(IRepository<ProjectTask, Guid> repository) : base(repository)
        {
        }
    }
}
