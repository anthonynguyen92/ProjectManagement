using doan.ProjectManagement.Enum;
using System;
using Volo.Abp.Domain.Entities.Auditing;

namespace doan.ProjectManagement.Entities
{
    public class SystemSetting : FullAuditedAggregateRoot<Guid>
    {
        public string Key { get; set; }
        public string Value { get; set; }
        public string Description { get; set; }
        public Status Status { get; set; }
        public DateTime? EffectDate { get; set; }
        public DateTime? ExpireDate { get; set; }
        public bool IsEncript { get; set; }
    }
}
