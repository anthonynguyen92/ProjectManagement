using doan.ProjectManagement.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace doan.ProjectManagement.DbMigrator
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(ProjectManagementEntityFrameworkCoreDbMigrationsModule),
        typeof(ProjectManagementApplicationContractsModule)
        )]
    public class ProjectManagementDbMigratorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
        }
    }
}
