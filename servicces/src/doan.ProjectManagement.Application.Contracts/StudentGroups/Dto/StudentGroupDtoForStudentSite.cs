using System;
using Volo.Abp.Application.Dtos;

namespace doan.ProjectManagement.StudentGroups.Dto
{
    public class StudentGroupDtoForStudentSite : PagedAndSortedResultRequestDto
    {
        public Guid StudentId { get; set; }
    }
}
