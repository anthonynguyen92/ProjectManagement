using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using StudentManagementProject.Data;
using Volo.Abp.DependencyInjection;

namespace StudentManagementProject.EntityFrameworkCore
{
    public class EntityFrameworkCoreStudentManagementProjectDbSchemaMigrator
        : IStudentManagementProjectDbSchemaMigrator, ITransientDependency
    {
        private readonly IServiceProvider _serviceProvider;

        public EntityFrameworkCoreStudentManagementProjectDbSchemaMigrator(
            IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public async Task MigrateAsync()
        {
            /* We intentionally resolving the StudentManagementProjectMigrationsDbContext
             * from IServiceProvider (instead of directly injecting it)
             * to properly get the connection string of the current tenant in the
             * current scope.
             */

            await _serviceProvider
                .GetRequiredService<StudentManagementProjectMigrationsDbContext>()
                .Database
                .MigrateAsync();
        }
    }
}