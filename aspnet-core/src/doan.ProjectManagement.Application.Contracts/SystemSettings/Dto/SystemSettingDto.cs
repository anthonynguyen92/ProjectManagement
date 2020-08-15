using Volo.Abp.Application.Dtos;
using doan.ProjectManagement.Enums;
using System;

namespace doan.ProjectManagement.SystemSettings.Dto
{
    public class SystemSettingDto : FullAuditedEntityDto<Guid>
    {
        public string Key { get; set; }
        public string Value { get; set; }
        public string Description { get; set; }
        public Status Status { get; set; }
        public DateTime? EffectDate { get; set; }
        public DateTime? ExpireDate { get; set; }
    }
}
