using ProjectManagement.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace ProjectManagement.Permissions
{
    public class ProjectManagementPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(ProjectManagementPermissions.GroupName);

            //Define your own permissions here. Example:
            //myGroup.AddPermission(ProjectManagementPermissions.MyPermission1, L("Permission:MyPermission1"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<ProjectManagementResource>(name);
        }
    }
}
