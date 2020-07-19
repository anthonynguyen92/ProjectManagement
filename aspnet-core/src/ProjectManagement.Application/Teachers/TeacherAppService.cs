using Abp.Application.Services;
using Abp.Domain.Repositories;
using ProjectManagement.Authorization;
using ProjectManagement.Entites;
using ProjectManagement.Teachers.Dto;
using System;

namespace ProjectManagement.Teachers
{
    public class TeacherAppService : AsyncCrudAppService<Teacher, TeacherDto, Guid,
        PagedTeacherResultRequest, CreateUpdateTeacherDto, CreateUpdateTeacherDto,
        GetTeacherForEditDto>, ITeacherAppService
    {
        public TeacherAppService(IRepository<Teacher, Guid> repository) : base(repository)
        {
        }

        protected override string CreatePermissionName { get; set; } = TeacherPermission.Create;
        protected override string UpdatePermissionName { get; set; } = TeacherPermission.Update;
        protected override string DeletePermissionName { get; set; } = TeacherPermission.Delete;
        protected override string GetAllPermissionName { get; set; } = TeacherPermission.Default;
        protected override string GetPermissionName { get; set; } = TeacherPermission.Default;


    }
}
