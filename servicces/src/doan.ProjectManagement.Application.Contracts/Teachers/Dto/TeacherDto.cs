﻿using Abp.Application.Services.Dto;
using System;

namespace doan.ProjectManagement.Teachers.Dto
{
    public class TeacherDto : FullAuditedEntityDto<Guid>
    {
        public string Name { get; set; }
        public DateTime? Birthday { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public string Degree { get; set; }
        public string Faculty { get; set; }
        public string Position { get; set; }
    }
}
