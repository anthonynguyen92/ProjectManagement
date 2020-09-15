using doan.ProjectManagement.TeacherInformationGroups.Dto;
using System;

namespace doan.ProjectManagement.TeacherInformationGroups
{
    public interface ITeacherInformationGroupAppService : IBaseAppService<Guid, CreateUpdateTeacherInformationGroupDto,
        GetTeacherInformationGroupDto, GetTeacherInformationGroupForEditDto, GetTeacherInformationGroupForInputDto>
    {
    }
}
