using Volo.Abp.Settings;

namespace StudentManagementProject.Settings
{
    public class StudentManagementProjectSettingDefinitionProvider : SettingDefinitionProvider
    {
        public override void Define(ISettingDefinitionContext context)
        {
            //Define your own settings here. Example:
            //context.Add(new SettingDefinition(StudentManagementProjectSettings.MySetting1));
        }
    }
}
