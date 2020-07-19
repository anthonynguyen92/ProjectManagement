using Abp.Domain.Entities.Auditing;
using ProjectManagement.Consts;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ProjectManagement.Entites
{
    public class Teacher : FullAuditedAggregateRoot<Guid>
    {
        [MaxLength(TeacherConsts.NameMaxLength)]
        public string Name { get; set; }
        [MaxLength(TeacherConsts.BranchMaxLength)]
        public string Branch { get; set; }
        [MaxLength(TeacherConsts.EmailMaxLength)]
        public string Email { get; set; }
        [MaxLength(TeacherConsts.PhoneNumberMaxLength)]
        public string PhoneNumber { get; set; }
        [MaxLength(TeacherConsts.ContentMaxLength)]
        public string Degree { get; set; }
        [MaxLength(TeacherConsts.ContentMaxLength)]
        public string Majority { get; set; }
        [MaxLength(TeacherConsts.ContentMaxLength)]
        public string Title { get; set; }
        public ICollection<Project> Projects { get; set; }

    }
}
