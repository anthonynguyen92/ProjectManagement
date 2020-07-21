using StudentManagementProject.Enum;
using System;
using System.Collections.Generic;
using Volo.Abp.Domain.Entities.Auditing;

namespace StudentManagementProject.Entities
{
    public class Project : FullAuditedAggregateRoot<Guid>
    {
        public string ProjectName { get; set; }
        public string Description { get; set; }
        public ProjectType ProjectType { get; set; }
        public ICollection<StudentProject> StudentProjects { get; set; }
        public ICollection<TeacherProject> TeacherProjects { get; set; }
        public string CourseYear { get; set; }
        public DateTime? DateStart { get; set; }
        public DateTime? DateExpired { get; set; }
        public int? NumOfStudent { get; set; }
        public string Semester { get; set; }
        public Level? Level { get; set; }
        public Status Status { get; set; }
        public double? Mark { get; set; }
        public string Source { get; set; }


    }
}
