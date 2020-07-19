using Abp.Application.Services.Dto;
using ProjectManagement.Enum;
using ProjectManagement.MultiTenancy.Dto;
using System;
using System.Collections.Generic;

namespace ProjectManagement.Projects.Dto
{
    public class GetProjectForEditDto : EntityDto<Guid>
    {
        public string ProjectName { get; set; }
        public string Descriptions { get; set; }
        public DateTime? DateStart { get; set; }
        public DateTime? DateExpried { get; set; }
        public int Instructors { get; set; }
        public double Progress { get; set; }
        public string AcademicYear { get; set; }
        public int? Mark { get; set; }
        public ProjectType ProjectType { get; set; }
        public Status Status { get; set; }
        public Level Level { get; set; }
        public List<StudentProjectDto> Students { get; set; }
        public List<TeacherProjectDto> Teachers { get; set; }
        public int Setmester { get; set; }
    }
}
