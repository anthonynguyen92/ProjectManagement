using System;

namespace doan.Shared.Eto
{
    [Serializable]
    public class NewTeacherUserEto
    {
        public string Name { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
    }
}
