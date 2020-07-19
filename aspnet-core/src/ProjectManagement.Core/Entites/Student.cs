using Abp.Domain.Entities.Auditing;
using ProjectManagement.Consts;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ProjectManagement.Entites
{
    public class Student : FullAuditedAggregateRoot<Guid>
    {
        [MaxLength(StudentConsts.NameMaxLength)]
        public string Name { get; set; }
        [MaxLength(StudentConsts.ClassMaxLength)]
        public string Class { get; set; }
        [MaxLength(StudentConsts.CodeMaxLength)]
        public string StudentCode { get; set; }
        [MaxLength(StudentConsts.EmailMaxLength)]
        public string Email { get; set; }
        [MaxLength(StudentConsts.PhoneNumberMaxLength)]
        public string PhoneNumber { get; set; }
        public int Setmester { get; set; }
        public int YearStudy { get; set; }
        [MaxLength(StudentConsts.FacultyMaxLength)]
        public string Faculty { get; set; }
        [MaxLength(StudentConsts.BranchMaxLength)]
        public string Branch { get; set; }
        public ICollection<Project> Projects { get; set; }
    }
}
