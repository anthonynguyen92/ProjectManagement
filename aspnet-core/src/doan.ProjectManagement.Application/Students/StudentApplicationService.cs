
using doan.ProjectManagement.Entities;
using doan.ProjectManagement.Localization;
using doan.ProjectManagement.Permissions;
using doan.ProjectManagement.Students.Dto;
using doan.ProjectManagements.Student;
using Microsoft.Extensions.Localization;
using System;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.Domain.Repositories;

namespace doan.ProjectManagement.Students
{
    public class StudentApplicationService : BaseAppService<
        Student, Guid, CreateUpdateStudentDto,
        GetStudentDto, GetStudentForEditDto, GetStudentInput>, IStudentApplicationService
    {
        protected override string CreatePolicyName { get; set; } = ProjectManagementPermissions.Student.Create;
        protected override string DeletePolicyName { get; set; } = ProjectManagementPermissions.Student.Delete;
        protected override string UpdatePolicyName { get; set; } = ProjectManagementPermissions.Student.Update;
        protected override string GetListPolicyName { get; set; } = ProjectManagementPermissions.Student.Default;
        protected override string GetPolicyName { get; set; } = ProjectManagementPermissions.Student.Default;

        private readonly IStringLocalizer<ProjectManagementResource> _localizers;
        public StudentApplicationService(IRepository<Student, Guid> repository, IStringLocalizer<ProjectManagementResource> localizers) : base(repository)
        {
            _localizers = localizers;
        }

        //add status for student
        protected override IQueryable<Student> CreateFilteredQuery(GetStudentInput input)
        {
            return Repository.WhereIf(!string.IsNullOrWhiteSpace(input.Filter), x => x.Name.Contains(input.Filter) ||
                 x.PhoneNumber.Contains(input.Filter) ||
                 x.Faculty.Contains(input.Filter) ||
                 x.Address.Contains(input.Filter) ||
                 x.CourseYear.Contains(input.Filter) ||
                 x.Email.Contains(input.Filter) ||
                 x.Branch.Contains(input.Filter));
        }

        protected override async Task<Student> Create(CreateUpdateStudentDto input)
        {
            await CheckCreatePolicyAsync();

            if (Repository.Any(x => x.PhoneNumber == input.PhoneNumber))
            {
                throw new UserFriendlyException(_localizers["PhoneNumberShouldBeNumber"]);
            }

            if (Repository.Any(x => x.Email == input.Email))
            {
                throw new UserFriendlyException(_localizers["EmailAlreadlyExists"]);
            }

            if (Repository.Any(x => x.StudentCode == input.StudentCode))
            {
                throw new UserFriendlyException(_localizers["StudentCodeAlreadyExists"]);
            }

            return await base.Create(input);
        }

        protected override async Task<Student> Update(CreateUpdateStudentDto input)
        {
            await CheckUpdatePolicyAsync();
            // phone number cant change rightnow
            // email cant change right now

            var entity = await Repository.GetAsync(input.Id.Value);

            MapToEntity(input, entity);

            await CurrentUnitOfWork.SaveChangesAsync();

            return entity;
        }

        public async Task<GetStudentForEditDto> GetStudentByCode(string code)
        {
            await CheckGetListPolicyAsync();
            var result = Repository.Where(x => x.StudentCode == code).FirstOrDefault();
            var entity = ObjectMapper.Map<Student, GetStudentForEditDto>(result);
            return entity;
        }
    }
}
