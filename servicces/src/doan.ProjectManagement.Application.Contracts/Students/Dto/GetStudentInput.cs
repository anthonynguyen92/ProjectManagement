using Volo.Abp.Application.Dtos;

namespace doan.ProjectManagement.Students.Dto
{
    public class GetStudentInput : PagedAndSortedResultRequestDto
    {
        public string Filter { get; set; }
    }
}
