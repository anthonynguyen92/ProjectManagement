using System;
using System.ComponentModel.DataAnnotations.Schema;
using Volo.Abp.Domain.Entities.Auditing;

namespace StudentManagementProject.Entities
{
    public class StudentProject : FullAuditedAggregateRoot<Guid>
    {
        [ForeignKey("StudentId")]
        public Guid? StudentId { get; set; }
        public Student Student { get; set; }
        [ForeignKey("ProjectId")]
        public Guid? ProjectId { get; set; }
        public Project Project { get; set; }
    }
}
