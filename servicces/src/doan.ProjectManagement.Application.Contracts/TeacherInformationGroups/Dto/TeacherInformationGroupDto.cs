using System;
using Volo.Abp.Application.Dtos;

namespace doan.ProjectManagement.TeacherInformationGroups.Dto
{
    public class TeacherInformationGroupDto : EntityDto<Guid>
    {
        public Guid? TeacherId { get; set; }
        public string TeacherName { get; set; }
        public string Roles { get; set; }
        public string Description { get; set; }
        public Guid? ProjectInformationId { get; set; }
    }
}
