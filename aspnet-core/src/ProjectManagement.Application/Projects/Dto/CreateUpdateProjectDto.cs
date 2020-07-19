using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using ProjectManagement.Consts;
using ProjectManagement.Entites;
using ProjectManagement.Enum;
using ProjectManagement.MultiTenancy.Dto;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ProjectManagement.Projects.Dto
{
    [AutoMapTo(typeof(Project))]
    public class CreateUpdateProjectDto : EntityDto<Guid>
    {
        [MaxLength(ProjectConsts.NameMaxLength)]
        public string ProjectName { get; set; }
        [MaxLength(ProjectConsts.ContentMaxLength)]
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
