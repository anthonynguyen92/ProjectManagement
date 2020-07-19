namespace ProjectManagement.Authorization
{
    public static class PermissionNames
    {
        public const string Pages_Tenants = "Pages.Tenants";

        public const string Pages_Users = "Pages.Users";

        public const string Pages_Roles = "Pages.Roles";
    }

    #region project 
    public class ProjectPermission
    {
        public const string GroupName = "ProjectManagement";

        public const string Default = GroupName + ".Project";
        public const string Create = Default + ".Create";
        public const string Update = Default + ".Update";
        public const string Delete = Default + ".Delete";

    }
    #endregion

    #region Student
    public class StudentPermission
    {
        public const string GroupName = "StudentManagement";

        public const string Default = GroupName + ".Student";
        public const string Create = Default + ".Create";
        public const string Update = Default + ".Update";
        public const string Delete = Default + ".Delete";
    }
    #endregion

    #region 
    public class TeacherPermission
    {
        public const string GroupName = "TeacherManagement";

        public const string Default = GroupName + ".Teacher";
        public const string Create = Default + ".Create";
        public const string Update = Default + ".Update";
        public const string Delete = Default + ".Delete";
    }
    #endregion
}
