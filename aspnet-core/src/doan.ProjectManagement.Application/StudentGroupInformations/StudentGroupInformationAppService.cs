using doan.ProjectManagement.Entities;
using doan.ProjectManagement.StudentGroupInformationGroups;
using doan.ProjectManagement.StudentGroupInformationGroups.Dto;
using System;
using System.Linq;
using Volo.Abp.Domain.Repositories;

namespace doan.ProjectManagement.StudentGroupInformations
{
    public class StudentGroupInformationAppService : BaseAppService<
        StudentGroupInformation, Guid, CreateUpdateStudentGroupInformationDto, GetStudentGroupInformationDto,
        GetStudentGroupInformationForEditDto, GetStudentGroupInformationForInputDto>, IStudentGroupInformationAppService
    {
        public StudentGroupInformationAppService(IRepository<StudentGroupInformation, Guid> repository) : base(repository)
        {

        }

        protected override IQueryable<StudentGroupInformation> CreateFilteredQuery(GetStudentGroupInformationForInputDto input)
        {
            return Repository
                .Where(x => x.StudentGroupId == input.StudentGroupId)
                .WhereIf(!string.IsNullOrWhiteSpace(input.Filter), x =>
                 x.Roles.Contains(input.Filter) ||
                 x.StudentName.Contains(input.Filter) ||
                 x.Position.Contains(input.Filter));
        }

    }
}
