using doan.ProjectManagement.ProjectInformations.Dto;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace doan.ProjectManagement.ProjectInformations
{
    public interface IProjectInformationAppService : IBaseAppService<
        Guid, 
        CreateUpdateProjectInformationDto,
        GetProjectInformationDto,
        GetProjectInformationForEditDto,
        GetProjectInformationForInputDto>
    {
        Task ToggleStatus(Guid Id);
    }
}
