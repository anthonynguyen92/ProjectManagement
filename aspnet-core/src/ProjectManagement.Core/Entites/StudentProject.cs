using Abp.Domain.Entities.Auditing;
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProjectManagement.Entites
{
    public class StudentProject : FullAuditedAggregateRoot<Guid>
    {
        public Student Student { get; set; }
        [ForeignKey("StudentId")]
        public Guid? StudentId { get; set; }
        public Project Projects { get; set; }
        [ForeignKey("ProjectId")]
        public Guid? ProjectId { get; set; }
    }
}
