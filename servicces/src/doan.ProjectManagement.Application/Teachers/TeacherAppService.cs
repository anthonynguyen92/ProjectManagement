using doan.ProjectManagement.Entities;
using doan.ProjectManagement.Localization;
using doan.ProjectManagement.Permissions;
using doan.ProjectManagement.Teachers.Dto;
using doan.Shared.Eto;
using Microsoft.Extensions.Localization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Dynamic.Core;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.EventBus.Distributed;

namespace doan.ProjectManagement.Teachers
{
    public class TeacherAppService : BaseAppService<
        Teacher, Guid, CreateUpdateTeacherDto, GetTeacherDto,
        GetTeacherForEditDto, GetTeacherInput>, ITeacherAppService
    {
        private readonly IStringLocalizer<ProjectManagementResource> _localizable;
        private readonly IRepository<TeacherInformationGroup, Guid> _teacherInformationGroupsRepository;
        private readonly IDistributedEventBus _distributedEventBus;
        public TeacherAppService(IRepository<Teacher, Guid> repository,
            IStringLocalizer<ProjectManagementResource> localizable,
            IRepository<TeacherInformationGroup, Guid> teacherInformationGroupsRepository,
            IDistributedEventBus distributedEventBus) : base(repository)
        {
            _localizable = localizable;
            _teacherInformationGroupsRepository = teacherInformationGroupsRepository;
            _distributedEventBus = distributedEventBus;
        }

        protected override string CreatePolicyName { get; set; } = ProjectManagementPermissions.Teacher.Create;
        protected override string DeletePolicyName { get; set; } = ProjectManagementPermissions.Teacher.Delete;
        protected override string UpdatePolicyName { get; set; } = ProjectManagementPermissions.Teacher.Update;
        protected override string GetListPolicyName { get; set; } = ProjectManagementPermissions.Teacher.Default;
        protected override string GetPolicyName { get; set; } = ProjectManagementPermissions.Teacher.Default;

        protected override IQueryable<Teacher> CreateFilteredQuery(GetTeacherInput input)
        {
            return Repository.WhereIf(!string.IsNullOrWhiteSpace(input.Filter),
                x => x.Name.Contains(input.Filter)
            || x.PhoneNumber.Contains(input.Filter)
            || x.Position.Contains(input.Filter));
        }

        protected override async Task<Teacher> Create(CreateUpdateTeacherDto input)
        {
            if (Repository.Any(x => x.Email == input.Email))
            {
                throw new UserFriendlyException(_localizable["EmailHasAlreadyExists"]);
            }

            if (Repository.Any(x => x.PhoneNumber == input.PhoneNumber))
            {
                throw new UserFriendlyException(_localizable["PhoneNumberShouldBeUnique"]);
            }

            var teacher = await base.Create(input);

            await _distributedEventBus.PublishAsync(new TeacherEto(teacher.Id, teacher.Name,
                teacher.PhoneNumber, teacher.Email, CurrentTenant.Id));

            return teacher;
        }

        public async Task<List<GetTeacherDto>> getTeacherRegisted(Guid projectInformationId)
        {
            var teacherRegisted = _teacherInformationGroupsRepository
                .Where(x => x.ProjectInformationId == projectInformationId)
                .Select(x => x.TeacherId);

            var getListTeacher = Repository.Where(x => !teacherRegisted.Contains(x.Id)).ToList();

            return ObjectMapper.Map<List<Teacher>, List<GetTeacherDto>>(getListTeacher);
        }

        public async Task<TeacherDto> GetCurrentTeacherUser()
        {
            var user = Repository.Where(x => x.Email == CurrentUser.Email).FirstOrDefault();
            return ObjectMapper.Map<Teacher, TeacherDto>(user);
        }
    }
}
