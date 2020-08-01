using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using doan.ProjectManagement.Data;
using Volo.Abp.DependencyInjection;

namespace doan.ProjectManagement.EntityFrameworkCore
{
    public class EntityFrameworkCoreProjectManagementDbSchemaMigrator
        : IProjectManagementDbSchemaMigrator, ITransientDependency
    {
        private readonly IServiceProvider _serviceProvider;

        public EntityFrameworkCoreProjectManagementDbSchemaMigrator(
            IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public async Task MigrateAsync()
        {
            /* We intentionally resolving the ProjectManagementMigrationsDbContext
             * from IServiceProvider (instead of directly injecting it)
             * to properly get the connection string of the current tenant in the
             * current scope.
             */

            await _serviceProvider
                .GetRequiredService<ProjectManagementMigrationsDbContext>()
                .Database
                .MigrateAsync();
        }
    }
}