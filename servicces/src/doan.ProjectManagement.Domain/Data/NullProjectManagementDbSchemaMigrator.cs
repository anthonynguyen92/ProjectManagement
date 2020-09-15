using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace doan.ProjectManagement.Data
{
    /* This is used if database provider does't define
     * IProjectManagementDbSchemaMigrator implementation.
     */
    public class NullProjectManagementDbSchemaMigrator : IProjectManagementDbSchemaMigrator, ITransientDependency
    {
        public Task MigrateAsync()
        {
            return Task.CompletedTask;
        }
    }
}