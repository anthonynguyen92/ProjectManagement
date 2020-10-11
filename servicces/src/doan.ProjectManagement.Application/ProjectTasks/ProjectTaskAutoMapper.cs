using AutoMapper;
using doan.ProjectManagement.Entities;
using doan.ProjectManagement.ProjectTasks.Dto;

namespace doan.ProjectManagement.ProjectTasks
{
    public class ProjectTaskAutoMapper : Profile
    {
        public ProjectTaskAutoMapper()
        {
            CreateMap<ProjectTask, ProjectTaskDto>(MemberList.None);
            CreateMap<ProjectTaskDto, ProjectTask>(MemberList.None);
            CreateMap<ProjectTask, GetProjectTaskDto>(MemberList.None);
            CreateMap<ProjectTask, GetProjectTaskForEditDto>(MemberList.None);
            CreateMap<CreateUpdateProjectTaskDto, ProjectTask>(MemberList.None);
        }
    }
}
