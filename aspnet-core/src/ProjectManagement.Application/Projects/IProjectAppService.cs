using Abp.Application.Services;
using ProjectManagement.Projects.Dto;
using System;

namespace ProjectManagement.Projects
{
    public interface IProjectAppService : IAsyncCrudAppService<ProjectDto,
        Guid, PagedProjectResultRequestDto, 
        CreateUpdateProjectDto, CreateUpdateProjectDto,GetProjectForEditDto>
    {
    }
}
