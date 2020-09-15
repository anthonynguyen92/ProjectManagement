using System;
using System.Collections.Generic;
using System.Text;

namespace doan.Shared.Eto
{
    [Serializable]
    public class TeacherEto
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public Guid? CurrentTenantId { get; set; }

        public TeacherEto()
        {

        }

        public TeacherEto(Guid id, string name, string phoneNumber, string email, Guid? currentTenantId)
        {
            Id = id;
            Name = name;
            PhoneNumber = phoneNumber;
            Email = email;
            CurrentTenantId = currentTenantId;
        }
    }
}
