using Abp.Application.Services;
using ProjectManagement.Entites;
using ProjectManagement.Projects.Dto;
using System;
using System.Threading.Tasks;

namespace ProjectManagement.Projects
{
    public interface IProjectAppService : IAsyncCrudAppService<ProjectDto,
        Guid, PagedProjectResultRequestDto, 
        CreateUpdateProjectDto, CreateUpdateProjectDto,GetProjectForEditDto>
    {
        Task<Project> GetById(Guid id);
    }
}
