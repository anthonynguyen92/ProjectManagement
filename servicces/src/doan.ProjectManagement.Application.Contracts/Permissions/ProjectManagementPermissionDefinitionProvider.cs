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
            var studentGroup = myGroup.AddPermission(ProjectManagementPermissions.StudentGroup.Default,
                L("Permission:StudentGroup"));
            studentGroup.AddChild(ProjectManagementPermissions.StudentGroup.Create, L("Permission:Create"));
            studentGroup.AddChild(ProjectManagementPermissions.StudentGroup.Update, L("Permission:Update"));
            studentGroup.AddChild(ProjectManagementPermissions.StudentGroup.Delete, L("Permission:Delete"));
            #endregion

            #region student group information
            var studentGroupInformation = myGroup.AddPermission(ProjectManagementPermissions.StudentGroupInformation.Default,
                L("Permission:StudentGroupInformation"));
            studentGroupInformation.AddChild(ProjectManagementPermissions.StudentGroupInformation.Create,
                L("Permission:Create"));
            studentGroupInformation.AddChild(ProjectManagementPermissions.StudentGroupInformation.Update,
                L("Permission:Update"));
            studentGroupInformation.AddChild(ProjectManagementPermissions.StudentGroupInformation.Delete,
                L("Permission:Delete"));
            #endregion

            #region project
            var project = myGroup.AddPermission(ProjectManagementPermissions.Project.Default,
                L("Permission:Project"));
            project.AddChild(ProjectManagementPermissions.Project.Create,
                L("Permission:Create"));
            project.AddChild(ProjectManagementPermissions.Project.Update,
                L("Permission:Update"));
            project.AddChild(ProjectManagementPermissions.Project.Delete,
                L("Permission:Delete"));
            #endregion

            #region project information
            var projectInformation = myGroup.AddPermission(ProjectManagementPermissions.ProjectInformation.Default,
                L("Permission:ProjectInformation"));
            projectInformation.AddChild(ProjectManagementPermissions.ProjectInformation.Create,
                L("Permission:Create"));
            projectInformation.AddChild(ProjectManagementPermissions.ProjectInformation.Update,
                L("Permission:Update"));
            projectInformation.AddChild(ProjectManagementPermissions.ProjectInformation.Delete,
                L("Permission:Delete"));
            #endregion

            #region Teacher information group
            var teacherInformationGroup = myGroup.AddPermission(ProjectManagementPermissions.TeacherInformationGroup.Default,
                L("Permission:TeacherInformationGroup"));
            teacherInformationGroup.AddChild(ProjectManagementPermissions.TeacherInformationGroup.Create,
                L("Permission:Create"));
            teacherInformationGroup.AddChild(ProjectManagementPermissions.TeacherInformationGroup.Update,
                L("Permission:Update"));
            teacherInformationGroup.AddChild(ProjectManagementPermissions.TeacherInformationGroup.Delete,
                L("Permission:Delete"));
            #endregion
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<ProjectManagementResource>(name);
        }
    }
}
