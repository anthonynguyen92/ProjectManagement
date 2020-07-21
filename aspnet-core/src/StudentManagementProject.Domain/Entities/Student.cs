using System;
using Volo.Abp.Domain.Entities.Auditing;

namespace StudentManagementProject.Entities
{
    public class Student : FullAuditedAggregateRoot<Guid>
    {
        public string Name { get; set; }
        public DateTime? Birthday { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public string Faculty { get; set; }
        public string Branch { get; set; }
        public string CourseYear { get; set; }
        public string StundentCode { get; set; }
        public StudentProject StudentProject { get; set; }
    }
}
