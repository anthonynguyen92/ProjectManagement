using Abp.Application.Services.Dto;

namespace ProjectManagement.Students.Dto
{
    public class PagedStudentResultRequest : PagedResultRequestDto
    {
        public string Filter { get; set; }
        public int MaxResult { get; set; }
    }
}
