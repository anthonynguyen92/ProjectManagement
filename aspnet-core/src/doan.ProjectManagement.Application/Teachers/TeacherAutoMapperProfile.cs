using AutoMapper;
using doan.ProjectManagement.Entities;
using doan.ProjectManagement.Teachers.Dto;

namespace doan.ProjectManagement.Teachers
{
    public class TeacherAutoMapperProfile : Profile
    {
        public TeacherAutoMapperProfile()
        {
            CreateMap<Teacher, TeacherDto>(MemberList.None);
            CreateMap<TeacherDto, Teacher>(MemberList.None);
            CreateMap<Teacher, GetTeacherDto>(MemberList.None);
            CreateMap<Teacher, GetTeacherForEditDto>(MemberList.None);
            CreateMap<CreateUpdateTeacherDto, Teacher>(MemberList.None);
        }
    }
}
