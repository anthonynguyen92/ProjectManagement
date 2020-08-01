using doan.ProjectManagement;
using doan.ProjectManagement.Students.Dto;
using System;

namespace doan.ProjectManagements.Student
{
    public interface IStudentApplicationService : IBaseAppService<
        Guid, CreateUpdateStudentDto, GetStudentDto, GetStudentForEditDto, GetStudentInput>
    {

    }
}
