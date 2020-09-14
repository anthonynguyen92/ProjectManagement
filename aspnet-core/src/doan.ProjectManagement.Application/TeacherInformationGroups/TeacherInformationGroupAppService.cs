using doan.ProjectManagement.Entities;
using doan.ProjectManagement.Permissions;
using doan.ProjectManagement.TeacherInformationGroups.Dto;
using System;
using System.Linq;
using Volo.Abp.Domain.Repositories;

namespace doan.ProjectManagement.TeacherInformationGroups
{
    public class TeacherInformationGroupAppService : BaseAppService<
        TeacherInformationGroup, Guid, CreateUpdateTeacherInformationGroupDto,
        GetTeacherInformationGroupDto, GetTeacherInformationGroupForEditDto,
        GetTeacherInformationGroupForInputDto>, ITeacherInformationGroupAppService
    {

        protected override string CreatePolicyName { get; set; } =
            ProjectManagementPermissions.TeacherInformationGroup.Create;
        protected override string DeletePolicyName { get; set; } =
            ProjectManagementPermissions.TeacherInformationGroup.Delete;
        protected override string GetListPolicyName { get; set; }
            = ProjectManagementPermissions.TeacherInformationGroup.Default;
        protected override string GetPolicyName { get; set; }
            = ProjectManagementPermissions.TeacherInformationGroup.Default;
        protected override string UpdatePolicyName { get; set; }
            = ProjectManagementPermissions.TeacherInformationGroup.Update;

        public TeacherInformationGroupAppService(IRepository<TeacherInformationGroup, Guid> repository) : base(repository)
        {
        }

        protected override IQueryable<TeacherInformationGroup> CreateFilteredQuery(GetTeacherInformationGroupForInputDto input)
        {
            return Repository.Where(x => x.ProjectInformationId == input.ProjectInformationId)
                .WhereIf(!string.IsNullOrWhiteSpace(input.Filter), x => x.TeacherName.Contains(input.Filter));
        }
    }
}
