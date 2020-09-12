using doan.ProjectManagement.ProjectInformations.Dto;
using System;

namespace doan.ProjectManagement.ProjectInformations
{
    public interface IProjectInformationAppService : IBaseAppService<
        Guid, 
        CreateUpdateProjectInformationDto,
        GetProjectInformationDto,
        GetProjectInformationForEditDto,
        GetProjectInformationForInputDto>
    {
    }
}
