using AutoMapper;
using doan.ProjectManagement.Entities;
using doan.ProjectManagement.Students.Dto;

namespace doan.ProjectManagement.Students
{
    public class StudentAutoMapperProfile : Profile
    {
        public StudentAutoMapperProfile()
        {
            CreateMap<Student, StudentDto>(MemberList.None);
            CreateMap<StudentDto, Student>(MemberList.None);
            CreateMap<Student, GetStudentDto>(MemberList.None);
            CreateMap<Student, GetStudentForEditDto>(MemberList.None);
            CreateMap<CreateUpdateStudentDto, Student>(MemberList.None);
            CreateMap<GetStudentForEditDto, Student>(MemberList.None);
        }

    }
}
