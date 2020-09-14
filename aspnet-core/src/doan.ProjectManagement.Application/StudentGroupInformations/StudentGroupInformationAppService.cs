using doan.ProjectManagement.Entities;
using doan.ProjectManagement.Permissions;
using doan.ProjectManagement.StudentGroupInformationGroups;
using doan.ProjectManagement.StudentGroupInformationGroups.Dto;
using System;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Localization;

namespace doan.ProjectManagement.StudentGroupInformations
{
    public class StudentGroupInformationAppService : BaseAppService<
        StudentGroupInformation, Guid, CreateUpdateStudentGroupInformationDto, GetStudentGroupInformationDto,
        GetStudentGroupInformationForEditDto, GetStudentGroupInformationForInputDto>, IStudentGroupInformationAppService
    {

        protected override string CreatePolicyName { get; set; } = ProjectManagementPermissions.StudentGroupInformation.Create;
        protected override string DeletePolicyName { get; set; } = ProjectManagementPermissions.StudentGroupInformation.Delete;
        protected override string UpdatePolicyName { get; set; } = ProjectManagementPermissions.StudentGroupInformation.Update;
        protected override string GetListPolicyName { get; set; } = ProjectManagementPermissions.StudentGroupInformation.Default;
        protected override string GetPolicyName { get; set; } = ProjectManagementPermissions.StudentGroupInformation.Default;

        private readonly IRepository<Project, Guid> _projectRepository;
        private readonly ILocalizableString _localizable;
        public StudentGroupInformationAppService(IRepository<StudentGroupInformation, Guid> repository,
            IRepository<Project, Guid> projectRepository,
            ILocalizableString localizable) : base(repository)
        {
            _projectRepository = _projectRepository;
            _localizable = localizable;
        }

        protected override IQueryable<StudentGroupInformation> CreateFilteredQuery(GetStudentGroupInformationForInputDto input)
        {
            return Repository.WhereIf(!string.IsNullOrWhiteSpace(input.Filter), x => x.Position.Contains(input.Filter)
             || x.StudentName.Contains(input.Filter)
             || x.Roles.Contains(input.Filter))
                .Where(x => x.StudentGroupId == input.StudentGroupId);
        }
    }
}
