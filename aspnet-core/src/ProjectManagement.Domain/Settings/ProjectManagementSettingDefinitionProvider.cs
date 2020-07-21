using Volo.Abp.Settings;

namespace ProjectManagement.Settings
{
    public class ProjectManagementSettingDefinitionProvider : SettingDefinitionProvider
    {
        public override void Define(ISettingDefinitionContext context)
        {
            //Define your own settings here. Example:
            //context.Add(new SettingDefinition(ProjectManagementSettings.MySetting1));
        }
    }
}
