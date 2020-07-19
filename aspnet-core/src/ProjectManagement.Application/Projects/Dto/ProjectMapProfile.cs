using AutoMapper;
using Microsoft.Extensions.Configuration;
using ProjectManagement.Entites;

namespace ProjectManagement.Projects.Dto
{
    public class ProjectMapProfile : Profile
    {
        public ProjectMapProfile()
        {
            CreateMap<Project, ProjectDto>(MemberList.None);
            CreateMap<ProjectDto, Project>(MemberList.None);
            CreateMap<Project, CreateUpdateProjectDto>(MemberList.None);
            CreateMap<Project, GetProjectForEditDto>(MemberList.None);
        }
    }
}
