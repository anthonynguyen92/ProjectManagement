using AutoMapper;
using doan.ProjectManagement.Entities;
using doan.ProjectManagement.TeacherInformationGroups.Dto;

namespace doan.ProjectManagement.TeacherInformationGroups
{
    public class TeacherInformationGroupAutoMapper : Profile
    {
        public TeacherInformationGroupAutoMapper()
        {
            CreateMap<TeacherInformationGroup, TeacherInformationGroupDto>(MemberList.None);
            CreateMap<TeacherInformationGroupDto, TeacherInformationGroup>(MemberList.None);
            CreateMap<TeacherInformationGroup, GetTeacherInformationGroupDto>(MemberList.None);
            CreateMap<TeacherInformationGroup, GetTeacherInformationGroupForEditDto>(MemberList.None);
            CreateMap<CreateUpdateTeacherInformationGroupDto, TeacherInformationGroup>(MemberList.None);
        }
    }
}
