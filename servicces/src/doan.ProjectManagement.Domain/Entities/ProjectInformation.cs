
using doan.ProjectManagement.Enum;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Volo.Abp.Domain.Entities.Auditing;

namespace doan.ProjectManagement.Entities
{
    public class ProjectInformation : FullAuditedAggregateRoot<Guid>
    {
        public Guid? ProjectId { get; set; }
        public string ProjectName { get; set; }
        public Guid? StudentGroupId { get; set; }
        public string StudentGroupName { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? ExpiredDate { get; set; }
        public string EmailContact { get; set; }
        public double? Mark { get; set; }
        public string Source { get; set; }
        public Status Status { get; set; }
    }
}
