using Volo.Abp.Application.Dtos;

namespace doan.ProjectManagement.Teachers.Dto
{
    public class GetTeacherInput : PagedAndSortedResultRequestDto
    {
        public string Filter { get; set; }
    }
}
