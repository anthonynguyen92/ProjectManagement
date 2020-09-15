using System;
using Volo.Abp.Application.Dtos;

namespace doan.ProjectManagement.TeacherInformationGroups.Dto
{
    public class GetTeacherInformationGroupForInputDto : PagedAndSortedResultRequestDto
    {
        public string Filter { get; set; }
        public Guid ProjectInformationId { get; set; }
    }
}
