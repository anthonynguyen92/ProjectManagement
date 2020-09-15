using System;
using System.Collections.Generic;
using Volo.Abp.Domain.Entities.Auditing;

namespace doan.ProjectManagement.Entities
{
    public class TeacherGroup : FullAuditedAggregateRoot<Guid>
    {
        public ICollection<Teacher> Teachers { get; set; }
    }
}