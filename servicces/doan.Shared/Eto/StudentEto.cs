using System;

namespace doan.Shared.Eto
{
    [Serializable]
    public class StudentEto
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string StudentCode { get; set; }
        public string Email { get; set; }
        public Guid? CurrentTenantId { get; set; }

        public StudentEto()
        {

        }

        public StudentEto(Guid id, string name, string studentCode, string email, Guid? currentTenantId)
        {
            Id = id;
            Name = name;
            StudentCode = studentCode;
            Email = email;
            CurrentTenantId = currentTenantId;
        }
    }
}
