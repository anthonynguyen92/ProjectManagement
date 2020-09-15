using doan.ProjectManagement.Entities;
using doan.ProjectManagement.Localization;
using doan.ProjectManagement.Permissions;
using doan.ProjectManagement.Teachers.Dto;
using Microsoft.Extensions.Localization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Dynamic.Core;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.Domain.Repositories;

namespace doan.ProjectManagement.Teachers
{
    public class TeacherAppService : BaseAppService<
        Teacher, Guid, CreateUpdateTeacherDto, GetTeacherDto,
        GetTeacherForEditDto, GetTeacherInput>, ITeacherAppService
    {
        private readonly IStringLocalizer<ProjectManagementResource> _localizable;
        private readonly IRepository<TeacherInformationGroup, Guid> _teacherInformationGroupsRepository;
        public TeacherAppService(IRepository<Teacher, Guid> repository,
            IStringLocalizer<ProjectManagementResource> localizable,
            IRepository<TeacherInformationGroup, Guid> teacherInformationGroupsRepository) : base(repository)
        {
            _localizable = localizable;
            _teacherInformationGroupsRepository = teacherInformationGroupsRepository;
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

            return await base.Create(input);
        }

        public async Task<List<GetTeacherDto>> getTeacherRegisted(Guid projectInformationId)
        {
            var teacherRegisted = _teacherInformationGroupsRepository
                .Where(x => x.ProjectInformationId == projectInformationId)
                .Select(x => x.TeacherId);

            var getListTeacher = Repository.Where(x => !teacherRegisted.Contains(x.Id)).ToList();

            return ObjectMapper.Map<List<Teacher>, List<GetTeacherDto>>(getListTeacher);
        }
    }
}
