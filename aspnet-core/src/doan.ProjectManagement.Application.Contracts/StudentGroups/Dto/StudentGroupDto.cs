using System;
using Volo.Abp.Application.Dtos;

namespace doan.ProjectManagement.StudentGroups.Dto
{
    public class StudentGroupDto : FullAuditedEntityDto<Guid>
    {
        public string GroupName { get; set; }
        public int? NumberOfMenber { get; set; }
    }
}
