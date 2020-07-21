using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace ProjectManagement.EntityFrameworkCore
{
    /* This class is needed for EF Core console commands
     * (like Add-Migration and Update-Database commands) */
    public class ProjectManagementMigrationsDbContextFactory : IDesignTimeDbContextFactory<ProjectManagementMigrationsDbContext>
    {
        public ProjectManagementMigrationsDbContext CreateDbContext(string[] args)
        {
            ProjectManagementEfCoreEntityExtensionMappings.Configure();

            var configuration = BuildConfiguration();

            var builder = new DbContextOptionsBuilder<ProjectManagementMigrationsDbContext>()
                .UseSqlServer(configuration.GetConnectionString("Default"));

            return new ProjectManagementMigrationsDbContext(builder.Options);
        }

        private static IConfigurationRoot BuildConfiguration()
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json", optional: false);

            return builder.Build();
        }
    }
}
