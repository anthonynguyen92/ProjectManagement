using doan.ProjectManagement.Projects.Dto;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace doan.ProjectManagement.Projects
{
    public interface IProjectAppService : IBaseAppService<
        Guid, CreateUpdateProjectDto, GetProjectDto, GetProjectForEditDto, GetProjectForInputDto>
    {
        Task ToggleStatus(Guid id);
        Task<List<ProjectDto>> getAllByStudentId(Guid studentId);
    }
}
