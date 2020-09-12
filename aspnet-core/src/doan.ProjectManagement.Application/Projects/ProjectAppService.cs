using Abp.UI;
using doan.ProjectManagement.Entities;
using doan.ProjectManagement.Enum;
using doan.ProjectManagement.Permissions;
using doan.ProjectManagement.Projects.Dto;
using System;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;

namespace doan.ProjectManagement.Projects
{
    public class ProjectAppService : BaseAppService<
        Project, Guid, CreateUpdateProjectDto, GetProjectDto, GetProjectForEditDto, GetProjectForInputDto>,
        IProjectAppService
    {

        protected override string CreatePolicyName { get; set; } = ProjectManagementPermissions.Project.Create;
        protected override string DeletePolicyName { get; set; } = ProjectManagementPermissions.Project.Delete;
        protected override string GetListPolicyName { get; set; } = ProjectManagementPermissions.Project.Delete;
        protected override string GetPolicyName { get; set; } = ProjectManagementPermissions.Project.Delete;
        protected override string UpdatePolicyName { get; set; } = ProjectManagementPermissions.Project.Update;
        public ProjectAppService(IRepository<Project, Guid> repository) : base(repository)
        {

        }

        protected override IQueryable<Project> CreateFilteredQuery(GetProjectForInputDto input)
        {
            //return Repository.WhereIf(!string.IsNullOrWhiteSpace(input.Filter),
            //    x => x.ProjectName.Contains(input.Filter));
            return base.CreateFilteredQuery(input);
        }

        public async Task ToggleStatus(Guid id)
        {
            var data = await Repository.GetAsync(id);
            if (data == null) throw new UserFriendlyException();
            data.Status = data.Status == Status.Active ? Status.Inactive : Status.Active;
        }
    }
}
