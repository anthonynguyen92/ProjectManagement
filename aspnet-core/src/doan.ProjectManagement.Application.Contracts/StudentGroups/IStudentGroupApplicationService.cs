using doan.ProjectManagement.StudentGroups.Dto;
using System;

namespace doan.ProjectManagement.StudentGroups
{
    public interface IStudentGroupApplicationService : IBaseAppService<Guid, CreateUpdateStudentGroupDto, GetStudentGroupDto
        , GetStudentGroupForEditDto, GetStudentGroupForInputDto>
    {
    }
}
