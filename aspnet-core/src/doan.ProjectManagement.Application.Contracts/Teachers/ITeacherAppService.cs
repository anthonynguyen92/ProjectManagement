using doan.ProjectManagement.Teachers.Dto;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace doan.ProjectManagement.Teachers
{
    public interface ITeacherAppService : IBaseAppService<
        Guid, CreateUpdateTeacherDto, GetTeacherDto, GetTeacherForEditDto, GetTeacherInput>
    {
        Task<List<GetTeacherDto>> getTeacherRegisted(Guid projectInformationId);
    }
}
