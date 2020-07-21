using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;

namespace StudentManagementProject.EntityFrameworkCore
{
    [DependsOn(
        typeof(StudentManagementProjectEntityFrameworkCoreModule)
        )]
    public class StudentManagementProjectEntityFrameworkCoreDbMigrationsModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAbpDbContext<StudentManagementProjectMigrationsDbContext>();
        }
    }
}
