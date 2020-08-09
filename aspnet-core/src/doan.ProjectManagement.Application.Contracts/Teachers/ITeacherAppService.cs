using doan.ProjectManagement.Teachers.Dto;
using System;

namespace doan.ProjectManagement.Teachers
{
    public interface ITeacherAppService : IBaseAppService<
        Guid, CreateUpdateTeacherDto, GetTeacherDto, GetTeacherForEditDto, GetTeacherInput>
    {
    }
}
