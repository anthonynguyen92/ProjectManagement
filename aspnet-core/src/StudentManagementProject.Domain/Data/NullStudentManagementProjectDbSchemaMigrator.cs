using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace StudentManagementProject.Data
{
    /* This is used if database provider does't define
     * IStudentManagementProjectDbSchemaMigrator implementation.
     */
    public class NullStudentManagementProjectDbSchemaMigrator : IStudentManagementProjectDbSchemaMigrator, ITransientDependency
    {
        public Task MigrateAsync()
        {
            return Task.CompletedTask;
        }
    }
}