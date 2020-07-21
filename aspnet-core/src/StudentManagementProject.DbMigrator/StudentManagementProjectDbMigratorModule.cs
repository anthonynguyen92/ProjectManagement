using StudentManagementProject.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace StudentManagementProject.DbMigrator
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(StudentManagementProjectEntityFrameworkCoreDbMigrationsModule),
        typeof(StudentManagementProjectApplicationContractsModule)
        )]
    public class StudentManagementProjectDbMigratorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
        }
    }
}
