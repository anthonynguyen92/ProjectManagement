
using System;
using Volo.Abp.Application.Dtos;

namespace doan.ProjectManagement.ProjectTasks.Dto
{
    public class GetProjectTaskForInputDto : PagedAndSortedResultRequestDto
    {
        public string Filter { get; set; }
        public Guid ProjectInformationId { get; set; }
    }
}
