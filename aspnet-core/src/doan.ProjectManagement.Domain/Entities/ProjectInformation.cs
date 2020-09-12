using Abp.Domain.Entities.Auditing;
using doan.ProjectManagement.Enum;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace doan.ProjectManagement.Entities
{
    public class ProjectInformation : FullAuditedAggregateRoot<Guid>
    {
        public Project Project { get; set; }
        [ForeignKey("ProjectId")]
        public Guid? ProjectId { get; set; }
        public ICollection<Teacher> Teachers { get; set; }
        public StudentGroup StudentGroup { get; set; }
        [ForeignKey("StudentGroupId")]
        public Guid? StudentGroupId { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? ExpiredDate { get; set; }
        public string EmailContact { get; set; }
        public double? Mark { get; set; }
        public string Source { get; set; }
        public Status Status { get; set; }
        public ICollection<ProjectRequest> Required { get; set; }
    }
}
