using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using ProjectManagement.Entites;
using ProjectManagement.Enum;
using ProjectManagement.Students.Dto;
using ProjectManagement.Teachers.Dto;
using System;
using System.Collections.Generic;

namespace ProjectManagement.Projects.Dto
{
    [AutoMapTo(typeof(Project))]
    public class CreateUpdateProjectDto : EntityDto<Guid>
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
        public int Setmester { get; set; }
    }
}
