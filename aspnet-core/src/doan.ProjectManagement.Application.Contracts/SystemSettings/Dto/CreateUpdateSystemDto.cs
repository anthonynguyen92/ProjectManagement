using doan.ProjectManagement.Enum;
using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Dtos;

namespace doan.ProjectManagement.SystemSettings.Dto
{
    public class CreateUpdateSystemDto:EntityDto<Guid?>
    {
        public string Key { get; set; }
        public string Value { get; set; }
        public string Description { get; set; }
        public Status Status { get; set; }
        public DateTime? EffectDate { get; set; }
        public DateTime? ExpireDate { get; set; }
    }
}
