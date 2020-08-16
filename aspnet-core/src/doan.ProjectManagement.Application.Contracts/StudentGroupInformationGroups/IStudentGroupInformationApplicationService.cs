using doan.ProjectManagement.StudentGroupInformationGroups.Dto;
using System;

namespace doan.ProjectManagement.StudentGroupInformationGroups
{
    public interface IStudentGroupInformationApplicationService : IBaseAppService<
        Guid, CreateUpdateStudentGroupInformationDto, GetStudentGroupInformationDto,
        GetStudentGroupInformationForEditDto, GetStudentGroupInformationForInputDto>
    {
    }
}
