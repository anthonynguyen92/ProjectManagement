using Abp.Application.Services.Dto;

namespace ProjectManagement.Projects.Dto
{
    public class PagedProjectResultRequestDto : PagedResultRequestDto
    {
        public string Filter { get; set; }
        public int MaxResult { get; set; }
    }
}
