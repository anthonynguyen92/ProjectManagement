using Abp.Authorization;
using Abp.Localization;
using Abp.MultiTenancy;

namespace ProjectManagement.Authorization
{
    public class ProjectManagementAuthorizationProvider : AuthorizationProvider
    {
        public override void SetPermissions(IPermissionDefinitionContext context)
        {
            context.CreatePermission(PermissionNames.Pages_Users, L("Users"));
            context.CreatePermission(PermissionNames.Pages_Roles, L("Roles"));
            context.CreatePermission(PermissionNames.Pages_Tenants, L("Tenants"), multiTenancySides: MultiTenancySides.Host);

            #region project
            var project = context.CreatePermission(ProjectPermission.Default,L("Permission:ProjectManagement"));
            project.CreateChildPermission(ProjectPermission.Create, L("Permission:Create"));
            project.CreateChildPermission(ProjectPermission.Delete, L("Permission:Delete"));
            project.CreateChildPermission(ProjectPermission.Update, L("Permission:Update"));
            #endregion

            #region student
            var student = context.CreatePermission(StudentPermission.Default, L("Permission:StudentManagement"));
            student.CreateChildPermission(StudentPermission.Create, L("Permission:Create"));
            student.CreateChildPermission(StudentPermission.Delete, L("Permission:Delete"));
            student.CreateChildPermission(StudentPermission.Update, L("Permission:Update"));
            #endregion

            #region teacher
            var teacher = context.CreatePermission(TeacherPermission.Default, L("Permission:TeacherManagement"));
            teacher.CreateChildPermission(TeacherPermission.Create, L("Permission:Create"));
            teacher.CreateChildPermission(TeacherPermission.Delete, L("Permission:Delete"));
            teacher.CreateChildPermission(TeacherPermission.Update, L("Permission:Update"));
            #endregion
        }

        private static ILocalizableString L(string name)
        {
            return new LocalizableString(name, ProjectManagementConsts.LocalizationSourceName);
        }
    }
}
