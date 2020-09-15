
using doan.ProjectManagement.Entities;
using doan.ProjectManagement.Localization;
using doan.ProjectManagement.Permissions;
using doan.ProjectManagement.Students.Dto;
using doan.ProjectManagements.Student;
using doan.Shared.Eto;
using Microsoft.Extensions.Localization;
using System;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.EventBus.Distributed;

namespace doan.ProjectManagement.Students
{
    public class StudentAppService : BaseAppService<
        Student, Guid, CreateUpdateStudentDto,
        GetStudentDto, GetStudentForEditDto, GetStudentInput>, IStudentAppService
    {
        protected override string CreatePolicyName { get; set; } = ProjectManagementPermissions.Student.Create;
        protected override string DeletePolicyName { get; set; } = ProjectManagementPermissions.Student.Delete;
        protected override string UpdatePolicyName { get; set; } = ProjectManagementPermissions.Student.Update;
        protected override string GetListPolicyName { get; set; } = ProjectManagementPermissions.Student.Default;
        protected override string GetPolicyName { get; set; } = ProjectManagementPermissions.Student.Default;

        private readonly IStringLocalizer<ProjectManagementResource> _localizers;
        private readonly IDistributedEventBus _distributedEventBus;
        public StudentAppService(IRepository<Student, Guid> repository,
            IStringLocalizer<ProjectManagementResource> localizers,
            IDistributedEventBus distributedEventBus) : base(repository)
        {
            _localizers = localizers;
            _distributedEventBus = distributedEventBus;
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

            var student = await base.Create(input);

            await _distributedEventBus.PublishAsync(new StudentEto(student.Id,
                student.Name, student.StudentCode, student.Email, CurrentTenant.Id));

            return student;
        }

        protected override async Task<Student> Update(CreateUpdateStudentDto input)
        {
            await CheckUpdatePolicyAsync();

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

        public async Task<bool> ValidStudent(ValidStudentInputDto input)
        {
            if (CurrentUser.IsAuthenticated == false)
            {
                if (input == null)
                    return false;
            }
            var student = Repository.FirstOrDefault(x => x.StudentCode == input.StudentCode);
            if (student != null)
                return true;
            return false;
        }

        public async Task<GetStudentDto> GetCurrentStudent()
        {
            var student = Repository.FirstOrDefault(x => CurrentUser.UserName == x.StudentCode);
            return ObjectMapper.Map<Student, GetStudentDto>(student);
        }
    }
}
