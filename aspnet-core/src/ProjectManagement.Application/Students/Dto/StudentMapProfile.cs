using AutoMapper;
using ProjectManagement.Entites;

namespace ProjectManagement.Students.Dto
{
    public class StudentMapProfile : Profile
    {
        public StudentMapProfile()
        {
            CreateMap<Student, StudentDto>(MemberList.None);
            CreateMap<StudentDto, Student>(MemberList.None);
            CreateMap<Student, CreateUpdateStudentDto>(MemberList.None);
            CreateMap<Student, GetStudentForEditDto>(MemberList.None);

        }
    }
}
