using doan.ProjectManagement.Enum;
using System;
using System.Collections.Generic;
using Volo.Abp.Domain.Entities.Auditing;

namespace doan.ProjectManagement.Entities
{
    public class Project : FullAuditedAggregateRoot<Guid>
    {
        public string ProjectName { get; set; }
        public ProjectType Type { get; set; }
        public Status Status { get; set; }
        public string Description { get; set; }
        public Level Level { get; set; }
        public int? NumberOfTeamRegister { get; set; }
        public int? LimitSubscriptions { get; set; }
    }
}
