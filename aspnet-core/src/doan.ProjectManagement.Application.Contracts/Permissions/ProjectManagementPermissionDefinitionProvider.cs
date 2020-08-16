using doan.ProjectManagement.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace doan.ProjectManagement.Permissions
{
    public class ProjectManagementPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(ProjectManagementPermissions.GroupName, L("Permission:ProjectManagement"));
            #region student
            var student = myGroup.AddPermission(ProjectManagementPermissions.Student.Default, L("Permission:Student"));
            student.AddChild(ProjectManagementPermissions.Student.Create, L("Permission:Create"));
            student.AddChild(ProjectManagementPermissions.Student.Update, L("Permission:Update"));
            student.AddChild(ProjectManagementPermissions.Student.Delete, L("Permission:Delete"));
            #endregion

            #region teacher
            var teacher = myGroup.AddPermission(ProjectManagementPermissions.Teacher.Default, L("Permission:Teacher"));
            teacher.AddChild(ProjectManagementPermissions.Teacher.Create, L("Permission:Create"));
            teacher.AddChild(ProjectManagementPermissions.Teacher.Update, L("Permission:Update"));
            teacher.AddChild(ProjectManagementPermissions.Teacher.Delete, L("Permission:Delete"));
            #endregion

            #region system-setting
            var systemsetting = myGroup.AddPermission(ProjectManagementPermissions.SystemSetting.Default, L("Permission:SystemSetting"));
            systemsetting.AddChild(ProjectManagementPermissions.SystemSetting.Create, L("Permission:Create"));
            systemsetting.AddChild(ProjectManagementPermissions.SystemSetting.Update, L("Permission:Update"));
            systemsetting.AddChild(ProjectManagementPermissions.SystemSetting.Delete, L("Permission:Delete"));
            #endregion

            #region student group
            var studentGroup = myGroup.AddPermission(ProjectManagementPermissions.StudentGroup.Default, L("Permission:StudentGroup"));
            studentGroup.AddChild(ProjectManagementPermissions.StudentGroup.Create, L("Permission:Create"));
            studentGroup.AddChild(ProjectManagementPermissions.StudentGroup.Update, L("Permission:Update"));
            studentGroup.AddChild(ProjectManagementPermissions.StudentGroup.Delete, L("Permission:Delete"));
            #endregion
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<ProjectManagementResource>(name);
        }
    }
}
