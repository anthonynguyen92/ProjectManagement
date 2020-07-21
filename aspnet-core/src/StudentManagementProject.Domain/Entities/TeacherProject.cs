using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using Volo.Abp.Domain.Entities.Auditing;

namespace StudentManagementProject.Entities
{
    public class TeacherProject:FullAuditedAggregateRoot<Guid>
    {
        [ForeignKey("TeacherId")]
        public Guid? TeacherId { get; set; }
        public Teacher Teacher { get; set; }
        [ForeignKey("ProjectId")]
        public Guid? ProjectId { get; set; }
        public Project Project { get; set; }
    }
}
