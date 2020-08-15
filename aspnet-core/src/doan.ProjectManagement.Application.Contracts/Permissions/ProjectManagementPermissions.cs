using Volo.Abp.Reflection;

namespace doan.ProjectManagement.Permissions
{
    public static class ProjectManagementPermissions
    {
        public const string GroupName = "ProjectManagement";

        //Add your own permission names. Example:
        //public const string MyPermission1 = GroupName + ".MyPermission1";
        public static string[] GetAll()
        {
            return ReflectionHelper.GetPublicConstantsRecursively(typeof(ProjectManagementPermissions));
        }

        #region teacher
        public class Teacher
        {
            public const string Default = GroupName + ".Teacher";
            public const string Create = Default + ".Create";
            public const string Update = Default + ".Update";
            public const string Delete = Default + ".Delete";
        }
        #endregion

        #region student
        public class Student
        {
            public const string Default = GroupName + ".Student";
            public const string Create = Default + ".Create";
            public const string Update = Default + ".Update";
            public const string Delete = Default + ".Delete";
        }
        #endregion

        #region system-setting
        public class SystemSetting
        {
            public const string Default = GroupName + ".SystemSetting";
            public const string Create = Default + ".Create";
            public const string Update = Default + ".Update";
            public const string Delete = Default + ".Delete";
        }
        #endregion
    }


}