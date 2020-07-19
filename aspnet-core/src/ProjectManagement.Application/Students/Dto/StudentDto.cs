using Abp.Application.Services.Dto;
using ProjectManagement.Projects.Dto;
using System;
using System.Collections.Generic;

namespace ProjectManagement.Students.Dto
{
    public class StudentDto:EntityDto<Guid>
    {
        public string Name { get; set; }
        public string Class { get; set; }
        public string StudentCode { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public int Setmester { get; set; }
        public int YearStudy { get; set; }
        public string Faculty { get; set; }
        public string Branch { get; set; }
        public List<ProjectDto> Projects { get; set; }

    }
}
