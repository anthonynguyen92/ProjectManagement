using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace StudentManagementProject.EntityFrameworkCore
{
    /* This class is needed for EF Core console commands
     * (like Add-Migration and Update-Database commands) */
    public class StudentManagementProjectMigrationsDbContextFactory : IDesignTimeDbContextFactory<StudentManagementProjectMigrationsDbContext>
    {
        public StudentManagementProjectMigrationsDbContext CreateDbContext(string[] args)
        {
            StudentManagementProjectEfCoreEntityExtensionMappings.Configure();

            var configuration = BuildConfiguration();

            var builder = new DbContextOptionsBuilder<StudentManagementProjectMigrationsDbContext>()
                .UseSqlServer(configuration.GetConnectionString("Default"));

            return new StudentManagementProjectMigrationsDbContext(builder.Options);
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
