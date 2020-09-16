using Abp.UI;
using doan.ProjectManagement.Entities;
using doan.ProjectManagement.Enum;
using doan.ProjectManagement.Permissions;
using doan.ProjectManagement.Projects.Dto;
using System;
using System.Collections.Generic;
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

        private readonly IRepository<StudentGroupInformation, Guid> _studentGroupRepository;
        private readonly IRepository<ProjectInformation, Guid> _projectInformation;
        public ProjectAppService(IRepository<Project, Guid> repository,
            IRepository<StudentGroupInformation, Guid> studentGroupRepository,
            IRepository<ProjectInformation, Guid> projectInformation) : base(repository)
        {
            _studentGroupRepository = studentGroupRepository;
            _projectInformation = projectInformation;
        }

        protected override IQueryable<Project> CreateFilteredQuery(GetProjectForInputDto input)
        {
            return Repository.WhereIf(!string.IsNullOrWhiteSpace(input.Filter),
                x => x.ProjectName.Contains(input.Filter));
        }

        public async Task ToggleStatus(Guid id)
        {
            await CheckUpdatePolicyAsync();
            var data = await Repository.GetAsync(id);
            if (data == null) throw new UserFriendlyException();
            data.Status = data.Status == Status.Active ? Status.Inactive : Status.Active;
        }

        protected override Task<Project> Create(CreateUpdateProjectDto input)
        {
            input.NumberOfTeamRegister = 0;
            return base.Create(input);
        }

        public async Task<List<ProjectDto>> getAllByStudentId(Guid studentId)
        {
            var currentStudentGroupInformation = _studentGroupRepository
                                .Where(x => x.StudentId == studentId)
                                .Select(x => x.StudentGroupId)
                                .ToHashSet();

            var projectInformationOfStudent = _projectInformation
                                .Where(x => currentStudentGroupInformation.Contains(x.StudentGroupId))
                                .Select(x => x.ProjectId)
                                .ToHashSet();

            var currentProjectOfStudent = Repository
                                .Where(x => projectInformationOfStudent.Contains(x.Id))
                                .ToHashSet()
                                .ToList();

            return ObjectMapper.Map<List<Project>, List<ProjectDto>>(currentProjectOfStudent);
            ;
        }
    }
}
