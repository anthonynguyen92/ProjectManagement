using doan.ProjectManagement.Enum;
using System;
using Volo.Abp.Application.Dtos;

namespace doan.ProjectManagement.Projects.Dto
{
    public class ProjectDto : EntityDto<Guid>
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
