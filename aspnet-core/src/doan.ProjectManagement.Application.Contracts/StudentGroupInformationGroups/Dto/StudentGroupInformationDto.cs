using System;
using Volo.Abp.Application.Dtos;

namespace doan.ProjectManagement.StudentGroupInformationGroups.Dto
{
    public class StudentGroupInformationDto : FullAuditedEntityDto<Guid>
    {
        public Guid? StudentId { get; set; }
        public Guid? StudentGroupId { get; set; }
        public string StudentName { get; set; }
        public string Position { get; set; }
        public string Roles { get; set; }
        public string Description { get; set; }
    }
}
