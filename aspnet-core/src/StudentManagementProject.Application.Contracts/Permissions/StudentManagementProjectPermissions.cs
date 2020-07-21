namespace StudentManagementProject.Permissions
{
    public static class StudentManagementProjectPermissions
    {
        public const string GroupName = "StudentManagementProject";

        //Add your own permission names. Example:
        //public const string MyPermission1 = GroupName + ".MyPermission1";

        #region student
        public class StudentPermission
        {
            public const string Default = GroupName + ".Student";
            public const string Create = Default + ".Create";
            public const string Update = Default + ".Update";
            public const string Delelte = Default + ".Delete";

        }
        #endregion

        #region teacher
        public class TeacherPermission
        {
            public const string Default = GroupName + ".Teacher";
            public const string Create = Default + ".Create";
            public const string Update = Default + ".Update";
            public const string Delelte = Default + ".Delete";

        }
        #endregion

        #region project
        public class ProjectPermission
        {
            public const string Default = GroupName + ".Project";
            public const string Create = Default + ".Create";
            public const string Update = Default + ".Update";
            public const string Delelte = Default + ".Delete";

        }
        #endregion
    }
}