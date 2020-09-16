using doan.ProjectManagement.StudentGroups.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace doan.ProjectManagement.StudentGroups
{
    public interface IStudentGroupAppService : IBaseAppService<Guid, CreateUpdateStudentGroupDto, GetStudentGroupDto
        , GetStudentGroupForEditDto, GetStudentGroupForInputDto>
    {
        Task<List<StudentGroupDto>> GetAllbyStudentInGroupForProject();
        Task<List<StudentGroupDto>> GetStudentForUI(StudentGroupDtoForStudentSite input);
    }
}
