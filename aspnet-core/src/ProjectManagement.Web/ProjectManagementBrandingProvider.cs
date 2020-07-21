using Volo.Abp.AspNetCore.Mvc.UI.Theme.Shared.Components;
using Volo.Abp.DependencyInjection;

namespace ProjectManagement.Web
{
    [Dependency(ReplaceServices = true)]
    public class ProjectManagementBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "ProjectManagement";
    }
}
