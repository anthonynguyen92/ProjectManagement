using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;

namespace doan.ProjectManagement.EntityFrameworkCore
{
    [DependsOn(
        typeof(ProjectManagementEntityFrameworkCoreModule)
        )]
    public class ProjectManagementEntityFrameworkCoreDbMigrationsModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAbpDbContext<ProjectManagementMigrationsDbContext>();
        }
    }
}
