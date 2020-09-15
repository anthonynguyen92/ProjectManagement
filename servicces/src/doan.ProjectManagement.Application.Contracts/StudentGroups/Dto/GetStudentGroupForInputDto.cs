using Volo.Abp.Application.Dtos;

namespace doan.ProjectManagement.StudentGroups.Dto
{
    public class GetStudentGroupForInputDto : PagedAndSortedResultRequestDto
    {
        public string Filter { get; set; }
    }
}
