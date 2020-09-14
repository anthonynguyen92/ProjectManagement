using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using Volo.Abp.Domain.Entities.Auditing;

namespace doan.ProjectManagement.Entities
{
    public class TeacherInformationGroup: FullAuditedAggregateRoot<Guid>
    {
        public Guid? TeacherId { get; set; }
        public Guid? ProjectInformationId { get; set; }
        public string TeacherName { get; set; }
        public string Roles { get; set; }
        public string Description { get; set; }
    }
}
