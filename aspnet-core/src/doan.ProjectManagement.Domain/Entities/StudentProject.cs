using System;
using System.ComponentModel.DataAnnotations.Schema;
using Volo.Abp.Domain.Entities.Auditing;

namespace doan.ProjectManagement.Entities
{
    public class StudentProject:FullAuditedAggregateRoot<Guid>
    {
        public Student Student { get; set; }
        [ForeignKey("StudentId")]
        public Guid StudentId { get; set; }


    }
}