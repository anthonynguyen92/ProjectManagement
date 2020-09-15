using AutoMapper;
using doan.ProjectManagement.Entities;
using doan.ProjectManagement.StudentGroupInformationGroups.Dto;

namespace doan.ProjectManagement.StudentGroupInformations
{
    public class StudentGroupInformationAutoMapperProfile : Profile
    {
        public StudentGroupInformationAutoMapperProfile()
        {
            CreateMap<StudentGroupInformation, StudentGroupInformationDto>(MemberList.None);
            CreateMap<StudentGroupInformationDto, StudentGroupInformation>(MemberList.None);
            CreateMap<StudentGroupInformation, GetStudentGroupInformationDto>(MemberList.None);
            CreateMap<StudentGroupInformation, GetStudentGroupInformationForEditDto>(MemberList.None);
            CreateMap<CreateUpdateStudentGroupInformationDto, StudentGroupInformation>(MemberList.None);
        }
    }
}
