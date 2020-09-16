using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Volo.Abp.Domain.Entities.Auditing;

namespace doan.ProjectManagement.Entities
{
    public class StudentGroup : FullAuditedAggregateRoot<Guid>
    {
        public string GroupName { get; set; }
        public int? NumberOfMenber { get; set; }
        public ICollection<StudentGroupInformation> StudentGroupInformation { get; set; }
    }
}