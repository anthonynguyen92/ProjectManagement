using System;
using System.ComponentModel.DataAnnotations.Schema;
using Volo.Abp.Domain.Entities.Auditing;

namespace doan.ProjectManagement.Entities
{
    public class TeacherProject : FullAuditedAggregateRoot<Guid>
    {

        public Teacher Teacher { get; set; }

        [ForeignKey("TeacherId")]
        public Guid TeacherId { get; set; }
    }
}