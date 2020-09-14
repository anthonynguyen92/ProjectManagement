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

        #region student group
        public class StudentGroup
        {
            public const string Default = GroupName + ".StudentGroup";
            public const string Create = Default + ".Create";
            public const string Update = Default + ".Update";
            public const string Delete = Default + ".Delete";
        }
        #endregion

        #region student group information
        public class StudentGroupInformation
        {
            public const string Default = GroupName + ".StudentGroupInformation";
            public const string Create = Default + ".Create";
            public const string Update = Default + ".Update";
            public const string Delete = Default + ".Delete";
        }
        #endregion

        #region Project information
        public class ProjectInformation
        {
            public const string Default = GroupName + ".ProjectInformation";
            public const string Create = Default + ".Create";
            public const string Update = Default + ".Update";
            public const string Delete = Default + ".Delete";
        }

        #endregion

        #region project
        public class Project
        {
            public const string Default = GroupName + ".Project";
            public const string Create = Default + ".Create";
            public const string Update = Default + ".Update";
            public const string Delete = Default + ".Delete";
        }
        #endregion

        #region Teacher group information 
        public class TeacherInformationGroup
        {
            public const string Default = GroupName + ".TeacherInformationGroup";
            public const string Create = Default + ".Create";
            public const string Update = Default + ".Update";
            public const string Delete = Default + ".Delete";
        }
        #endregion
    }


}