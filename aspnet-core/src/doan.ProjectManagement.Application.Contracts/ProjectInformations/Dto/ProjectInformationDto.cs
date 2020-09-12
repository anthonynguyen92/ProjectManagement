using doan.ProjectManagement.Enum;
using System;
using Volo.Abp.Application.Dtos;

namespace doan.ProjectManagement.ProjectInformations.Dto
{
    public class ProjectInformationDto : EntityDto<Guid>
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
