using doan.ProjectManagement.Entities;
using doan.ProjectManagement.Permissions;
using doan.ProjectManagement.StudentGroups.Dto;
using System;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;

namespace doan.ProjectManagement.StudentGroups
{
    public class StudentGroupAppService : BaseAppService<StudentGroup, Guid,
        CreateUpdateStudentGroupDto, GetStudentGroupDto, GetStudentGroupForEditDto,
        GetStudentGroupForInputDto>, IStudentGroupAppService
    {

        protected override string CreatePolicyName { get; set; } = ProjectManagementPermissions.StudentGroup.Create;
        protected override string DeletePolicyName { get; set; } = ProjectManagementPermissions.StudentGroup.Delete;
        protected override string UpdatePolicyName { get; set; } = ProjectManagementPermissions.StudentGroup.Update;
        protected override string GetListPolicyName { get; set; } = ProjectManagementPermissions.StudentGroup.Default;
        protected override string GetPolicyName { get; set; } = ProjectManagementPermissions.StudentGroup.Default;

        public StudentGroupAppService(IRepository<StudentGroup, Guid> repository) : base(repository)
        {
        }

        protected override IQueryable<StudentGroup> CreateFilteredQuery(GetStudentGroupForInputDto input)
        {
            return Repository.WhereIf(!string.IsNullOrWhiteSpace(input.Filter), x => x.GroupName.Contains(input.Filter));
        }
     }
}
