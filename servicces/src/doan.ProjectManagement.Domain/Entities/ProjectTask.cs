using doan.ProjectManagement.Enum;
using System;
using Volo.Abp.Domain.Entities.Auditing;

namespace doan.ProjectManagement.Entities
{
    public class ProjectTask : FullAuditedAggregateRoot<Guid>
    {
        public Guid? ProjectInformationId { get; set; }
        public string Name { get; set; }
        public string Descriptions { get; set; }
        public TaskType Type { get; set; }
        public string TeacherName { get; set; }
        public string Bonus { get; set; }
    }
}
