using doan.ProjectManagement.ProjectTasks.Dto;
using System;

namespace doan.ProjectManagement.ProjectTasks
{
    public interface IProjectTaskAppService : IBaseAppService<Guid,
        CreateUpdateProjectTaskDto, GetProjectTaskDto, GetProjectTaskForEditDto, GetProjectTaskForInputDto>
    {
    }
}
