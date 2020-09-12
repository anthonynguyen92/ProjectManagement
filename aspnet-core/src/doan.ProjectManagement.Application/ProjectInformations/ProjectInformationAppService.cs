using doan.ProjectManagement.Entities;
using doan.ProjectManagement.Permissions;
using doan.ProjectManagement.ProjectInformations.Dto;
using System;
using System.Linq;
using Volo.Abp.Domain.Repositories;

namespace doan.ProjectManagement.ProjectInformations
{
    public class ProjectInformationAppService : BaseAppService<
        ProjectInformation, Guid, CreateUpdateProjectInformationDto,
        GetProjectInformationDto,
        GetProjectInformationForEditDto,
        GetProjectInformationForInputDto>, IProjectInformationAppService
    {
        protected override string CreatePolicyName { get; set; } = ProjectManagementPermissions.ProjectInformation.Create;
        protected override string DeletePolicyName { get; set; } = ProjectManagementPermissions.ProjectInformation.Delete;
        protected override string GetListPolicyName { get; set; } = ProjectManagementPermissions.ProjectInformation.Default;
        protected override string GetPolicyName { get; set; } = ProjectManagementPermissions.ProjectInformation.Default;
        protected override string UpdatePolicyName { get; set; } = ProjectManagementPermissions.ProjectInformation.Update;

        public ProjectInformationAppService(IRepository<ProjectInformation, Guid> repository) : base(repository)
        {
        }

        protected override IQueryable<ProjectInformation> CreateFilteredQuery(GetProjectInformationForInputDto input)
        {
            return Repository
                .Where(x => x.ProjectId == input.ProjectId)
                .WhereIf(!string.IsNullOrWhiteSpace(input.Filter),
                x => x.Mark.ToString().Contains(input.Filter)
                || x.Mark.ToString().Contains(input.Filter));
        }
    }
}
