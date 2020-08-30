using doan.ProjectManagement;
using doan.ProjectManagement.Students.Dto;
using System;
using System.Threading.Tasks;

namespace doan.ProjectManagements.Student
{
    public interface IStudentApplicationService : IBaseAppService<
        Guid, CreateUpdateStudentDto, GetStudentDto, GetStudentForEditDto, GetStudentInput>
    {

        Task<GetStudentForEditDto> GetStudentByCode(string code);
    }
}
