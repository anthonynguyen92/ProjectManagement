using Volo.Abp.Application.Dtos;

namespace doan.ProjectManagement.Projects.Dto
{
    public class GetProjectForInputDto : PagedAndSortedResultRequestDto
    {
        public string Filter { get; set; }
    }
}
