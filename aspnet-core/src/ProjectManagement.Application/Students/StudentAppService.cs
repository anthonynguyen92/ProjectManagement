using Abp.Application.Services;
using Abp.Domain.Repositories;
using ProjectManagement.Authorization;
using ProjectManagement.Entites;
using ProjectManagement.Students.Dto;
using System;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;

namespace ProjectManagement.Students
{
    public class StudentAppService : AsyncCrudAppService<Student, StudentDto,
        Guid, PagedStudentResultRequest, CreateUpdateStudentDto,
        CreateUpdateStudentDto, GetStudentForEditDto>, IStudentAppService
    {

        public StudentAppService(IRepository<Student, Guid> repository) : base(repository)
        { 
        }

        protected override string CreatePermissionName { get; set; } = StudentPermission.Create;
        protected override string UpdatePermissionName { get; set; } = StudentPermission.Update;
        protected override string DeletePermissionName { get; set; } = StudentPermission.Delete;
        protected override string GetAllPermissionName { get; set; } = StudentPermission.Default;
        protected override string GetPermissionName { get; set; } = StudentPermission.Default;


    }
}
