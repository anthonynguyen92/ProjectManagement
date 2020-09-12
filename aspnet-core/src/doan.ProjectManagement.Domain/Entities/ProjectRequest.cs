using Abp.Domain.Entities.Auditing;
using doan.ProjectManagement.Enum;
using System;

namespace doan.ProjectManagement.Entities
{
    public class ProjectRequest : FullAuditedAggregateRoot<Guid>
    {
        public string NameRequest { get; set; }
        public RequiredLevel RequiredLevel { get; set; }
        public StatusRequired StatusRequired { get; set; }
    }
}
