using Abp.Domain.Entities.Auditing;
using doan.ProjectManagement.Enum;
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace doan.ProjectManagement.Entities
{
    public class ProjectRequest : FullAuditedAggregateRoot<Guid>
    {
        public ProjectInformation ProjectInformation { get; set; }
        [ForeignKey("ProjectInformationId")]
        public Guid? ProjectInformationId { get; set; }
        public string NameRequest { get; set; }
        public RequiredLevel RequiredLevel { get; set; }
        public StatusRequired StatusRequired { get; set; }
    }
}
