using doan.ProjectManagement.Enum;
using System;
using Volo.Abp.Application.Dtos;

namespace doan.ProjectManagement.ProjectTasks.Dto
{
    public class ProjectTaskDto : EntityDto<Guid>
    {
        public Guid? ProjectInformationId { get; set; }
        public string Name { get; set; }
        public string Descriptions { get; set; }
        public TaskType Type { get; set; }
        public string TeacherName { get; set; }
        public string Bonus { get; set; }
    }
}
