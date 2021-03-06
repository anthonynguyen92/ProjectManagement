﻿using Abp.UI;
using doan.ProjectManagement.Entities;
using doan.ProjectManagement.Enum;
using doan.ProjectManagement.Localization;
using doan.ProjectManagement.Permissions;
using doan.ProjectManagement.ProjectInformations.Dto;
using Microsoft.Extensions.Localization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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

        private readonly IRepository<Project, Guid> _projectRepository;
        private readonly IStringLocalizer<ProjectManagementResource> _localizer;
        private readonly IRepository<StudentGroupInformation, Guid> _studentGroupInformation;
        public ProjectInformationAppService(IRepository<ProjectInformation, Guid> repository,
            IStringLocalizer<ProjectManagementResource> localizer,
            IRepository<Project, Guid> projectRepository,
            IRepository<StudentGroupInformation, Guid> studentGroupInformation) : base(repository)
        {
            _localizer = localizer;
            _projectRepository = projectRepository;
            _studentGroupInformation = studentGroupInformation;

        }

        protected override IQueryable<ProjectInformation> CreateFilteredQuery(GetProjectInformationForInputDto input)
        {
            return Repository
                .Where(x => x.ProjectId == input.ProjectId)
                .WhereIf(!string.IsNullOrWhiteSpace(input.Filter),
                x => x.Mark.ToString().Contains(input.Filter)
                || x.Mark.ToString().Contains(input.Filter));
        }

        public async Task ToggleStatus(Guid Id)
        {
            var data = await Repository.GetAsync(Id);
            if (data == null) throw new UserFriendlyException();
            data.Status = data.Status == Status.Active ? Status.Inactive : Status.Active;
        }
        protected override async Task<ProjectInformation> Create(CreateUpdateProjectInformationDto input)
        {
            await CheckCreatePolicyAsync();

            var isLimited = _projectRepository.Where(x => x.Id == input.ProjectId).FirstOrDefault();
            isLimited.NumberOfTeamRegister++;
            if (isLimited.NumberOfTeamRegister > isLimited.LimitSubscriptions)
            {
                throw new UserFriendlyException("LimitedForSubscription");
            }

            var entity = MapToEntity(input);

            await _projectRepository.UpdateAsync(isLimited);

            await Repository.InsertAsync(entity);

            await CurrentUnitOfWork.SaveChangesAsync();

            return entity;
        }

        public override Task Delete(Guid id)
        {
            var projectInformation = Repository.Where(x => x.Id == id).FirstOrDefault();

            var project = _projectRepository.Where(x => x.Id == projectInformation.ProjectId).FirstOrDefault();

            project.NumberOfTeamRegister--;

            _projectRepository.UpdateAsync(project);

            return base.Delete(id);
        }
    }
}
