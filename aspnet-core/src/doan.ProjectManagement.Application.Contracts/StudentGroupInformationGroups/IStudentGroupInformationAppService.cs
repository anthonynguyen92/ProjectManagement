using doan.ProjectManagement.StudentGroupInformationGroups.Dto;
using System;

namespace doan.ProjectManagement.StudentGroupInformationGroups
{
    public interface IStudentGroupInformationAppService : IBaseAppService<
        Guid, CreateUpdateStudentGroupInformationDto, GetStudentGroupInformationDto,
        GetStudentGroupInformationForEditDto, GetStudentGroupInformationForInputDto>
    {
    }
}
