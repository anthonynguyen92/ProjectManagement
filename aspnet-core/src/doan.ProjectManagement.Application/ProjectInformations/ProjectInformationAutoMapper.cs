using AutoMapper;
using doan.ProjectManagement.Entities;
using doan.ProjectManagement.ProjectInformations.Dto;

namespace doan.ProjectManagement.ProjectInformations
{
    public class ProjectInformationAutoMapper : Profile
    {
        public ProjectInformationAutoMapper()
        { CreateMap<ProjectInformation, ProjectInformationDto>(MemberList.None);
            CreateMap<ProjectInformationDto, ProjectInformation>(MemberList.None);
            CreateMap<ProjectInformation, GetProjectInformationDto>(MemberList.None);
            CreateMap<ProjectInformation, GetProjectInformationForEditDto>(MemberList.None);
            CreateMap<CreateUpdateProjectInformationDto, ProjectInformation>(MemberList.None);
            CreateMap<GetProjectInformationForEditDto, ProjectInformation>(MemberList.None);
        }
    }
}
