using doan.ProjectManagement.Entities;
using doan.ProjectManagement.Permissions;
using doan.ProjectManagement.StudentGroups.Dto;
using System;
using System.Collections.Generic;
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
        private readonly IRepository<ProjectInformation, Guid> _projectInformationRepository;
        public StudentGroupAppService(IRepository<StudentGroup, Guid> repository,
            IRepository<ProjectInformation, Guid> projectInformationRepository) : base(repository)
        {
            _projectInformationRepository = projectInformationRepository;
        }

        protected override IQueryable<StudentGroup> CreateFilteredQuery(GetStudentGroupForInputDto input)
        {
            return Repository.WhereIf(!string.IsNullOrWhiteSpace(input.Filter), x => x.GroupName.Contains(input.Filter));
        }

        public override async Task<List<GetStudentGroupDto>> GetAll()
        {
            var list = await Repository.GetListAsync();
            return ObjectMapper.Map<List<StudentGroup>, List<GetStudentGroupDto>>(list);
        }

        public async Task<List<StudentGroupDto>> GetAllbyStudentInGroupForProject()
        {
            var listOfGroupRegisted = _projectInformationRepository
                            .Select(x => x.StudentGroupId).ToList();

            var listByStudentDontRegister = Repository
                .Where(x => !listOfGroupRegisted.Contains(x.Id))
                .ToList();
            return ObjectMapper.Map<List<StudentGroup>, List<StudentGroupDto>>(listByStudentDontRegister);
        }
    }
}
