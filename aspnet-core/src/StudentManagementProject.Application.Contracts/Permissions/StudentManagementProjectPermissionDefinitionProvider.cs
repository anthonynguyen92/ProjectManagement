using StudentManagementProject.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace StudentManagementProject.Permissions
{
    public class StudentManagementProjectPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(StudentManagementProjectPermissions.GroupName,
                L("Permission:StudentManagementProject"));

            //Define your own permissions here. Example:
            //myGroup.AddPermission(StudentManagementProjectPermissions.MyPermission1, L("Permission:MyPermission1"));

            #region student
            var student = myGroup.AddPermission(StudentManagementProjectPermissions.StudentPermission.Default, L("Permission:Student"));
            student.AddChild(StudentManagementProjectPermissions.StudentPermission.Create, L("Permission:Create"));
            student.AddChild(StudentManagementProjectPermissions.StudentPermission.Update, L("Permission:Update"));
            student.AddChild(StudentManagementProjectPermissions.StudentPermission.Default, L("Permission:Delete"));
            #endregion

            #region teacher
            var teacher = myGroup.AddPermission(StudentManagementProjectPermissions.TeacherPermission.Default, L("Permission:Student"));
            teacher.AddChild(StudentManagementProjectPermissions.TeacherPermission.Create, L("Permission:Create"));
            teacher.AddChild(StudentManagementProjectPermissions.TeacherPermission.Update, L("Permission:Update"));
            teacher.AddChild(StudentManagementProjectPermissions.TeacherPermission.Default, L("Permission:Delete"));
            #endregion

            #region project
            var project = myGroup.AddPermission(StudentManagementProjectPermissions.ProjectPermission.Default, L("Permission:Student"));
            project.AddChild(StudentManagementProjectPermissions.ProjectPermission.Create, L("Permission:Create"));
            project.AddChild(StudentManagementProjectPermissions.ProjectPermission.Update, L("Permission:Update"));
            project.AddChild(StudentManagementProjectPermissions.ProjectPermission.Default, L("Permission:Delete"));
            #endregion
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<StudentManagementProjectResource>(name);
        }
    }
}
