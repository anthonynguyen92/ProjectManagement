using System;
using Volo.Abp.Application.Dtos;

namespace doan.ProjectManagement.StudentGroupInformationGroups.Dto
{
    public class GetStudentGroupInformationForInputDto : PagedAndSortedResultRequestDto
    {
        public string Filter { get; set; }
        public Guid? StudentGroupId { get; set; }
    }
}
