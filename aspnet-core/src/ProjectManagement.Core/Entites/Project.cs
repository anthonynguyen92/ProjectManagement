using Abp.Domain.Entities.Auditing;
using ProjectManagement.Consts;
using ProjectManagement.Enum;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ProjectManagement.Entites
{
    public class Project : FullAuditedAggregateRoot<Guid>
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
        public ICollection<StudentProject> Students { get; set; }
        public ICollection<TeacherProject> Teachers { get; set; }
        public int Setmester { get; set; }
    }
}
