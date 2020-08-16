using AutoMapper;
using doan.ProjectManagement.Entities;
using doan.ProjectManagement.StudentGroups.Dto;

namespace doan.ProjectManagement.StudentGroups
{
    public class StudentGroupAutoMapperProfile : Profile
    {
        public StudentGroupAutoMapperProfile()
        {
            CreateMap<StudentGroup, StudentGroupDto>(MemberList.None);
            CreateMap<StudentGroupDto, StudentGroup>(MemberList.None);
            CreateMap<StudentGroup, GetStudentGroupDto>(MemberList.None);
            CreateMap<StudentGroup, GetStudentGroupForEditDto>(MemberList.None);
            CreateMap<CreateUpdateStudentGroupDto, StudentGroup>(MemberList.None);
        }
    }
}
