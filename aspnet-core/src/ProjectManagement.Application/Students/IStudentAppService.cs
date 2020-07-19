using Abp.Application.Services;
using ProjectManagement.Students.Dto;
using System;

namespace ProjectManagement.Students
{
    public interface IStudentAppService : IAsyncCrudAppService<StudentDto, Guid, PagedStudentResultRequest
        , CreateUpdateStudentDto, CreateUpdateStudentDto, GetStudentForEditDto>
    {
    }
}
