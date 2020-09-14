using AutoMapper;
using doan.ProjectManagement.Entities;
using doan.ProjectManagement.Projects.Dto;

namespace doan.ProjectManagement.Projects
{
    public class ProjectAutoMapper : Profile
    {
        public ProjectAutoMapper()
        {
            CreateMap<Project, ProjectDto>(MemberList.None);
            CreateMap<ProjectDto, Project>(MemberList.None);
            CreateMap<Project, GetProjectDto>(MemberList.None);
            CreateMap<Project, GetProjectForEditDto>(MemberList.None);
            CreateMap<CreateUpdateProjectDto, Project>(MemberList.None);
            CreateMap<GetProjectForEditDto, Project>(MemberList.None);
        }
    }
}
