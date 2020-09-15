using System;
using System.ComponentModel.DataAnnotations.Schema;
using Volo.Abp.Domain.Entities.Auditing;

namespace doan.ProjectManagement.Entities
{
    public class StudentGroupInformation : FullAuditedAggregateRoot<Guid>
    {
        public Guid? StudentId { get; set; }
        public Guid? StudentGroupId { get; set; }
        public string StudentName { get; set; }
        public string Position { get; set; }
        public string Roles { get; set; }
        public string Description { get; set; }
    }
}
