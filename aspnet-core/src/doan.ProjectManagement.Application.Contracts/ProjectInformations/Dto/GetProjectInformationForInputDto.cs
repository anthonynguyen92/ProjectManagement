using System;
using Volo.Abp.Application.Dtos;

namespace doan.ProjectManagement.ProjectInformations.Dto
{
    public class GetProjectInformationForInputDto : PagedAndSortedResultRequestDto
    {
        public string Filter { get; set; }
        public Guid? ProjectId { get; set; }
    }
}
