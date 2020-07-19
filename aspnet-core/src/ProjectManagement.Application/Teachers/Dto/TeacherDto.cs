using Abp.Application.Services.Dto;
using ProjectManagement.Projects.Dto;
using System;
using System.Collections.Generic;

namespace ProjectManagement.Teachers.Dto
{
    public class TeacherDto :EntityDto<Guid>
    {
        public string Name { get; set; }
        public string Branch { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string Degree { get; set; }
        public string Majority { get; set; }
        public string Title { get; set; }
        public List<ProjectDto> Projects { get; set; }
    }
}
