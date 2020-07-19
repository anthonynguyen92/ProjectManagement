using Abp.Domain.Entities.Auditing;
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProjectManagement.Entites
{
    public class TeacherProject : FullAuditedAggregateRoot<Guid>
    {
        public Teacher Teacher { get; set; }
        [ForeignKey("TeacherId")]
        public Guid? TeacherId { get; set; }
        public Project Project { get; set; }
        [ForeignKey("ProjectId")]
        public Guid? ProjectId { get; set; }
    }
}
