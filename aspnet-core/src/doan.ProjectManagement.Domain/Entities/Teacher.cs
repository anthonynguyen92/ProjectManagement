﻿using System;
using Volo.Abp.Domain.Entities.Auditing;

namespace doan.ProjectManagement.Entities
{
    public class Teacher: FullAuditedAggregateRoot<Guid>
    {
        public string Name { get; set; }
        public DateTime? Birthday { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public string Degree { get; set; }
        public string Faculty { get; set; }
        public string Position { get; set; }
        public TeacherProject TeacherProject { get; set; }
    }
}
