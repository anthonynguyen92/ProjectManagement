using System;
using Volo.Abp.Application.Dtos;

namespace doan.ProjectManagement.Teachers.Dto
{
    public class CreateUpdateTeacherDto : EntityDto<Guid?>
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
