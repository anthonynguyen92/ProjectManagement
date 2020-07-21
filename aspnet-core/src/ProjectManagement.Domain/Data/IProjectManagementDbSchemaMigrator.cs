using System.Threading.Tasks;

namespace ProjectManagement.Data
{
    public interface IProjectManagementDbSchemaMigrator
    {
        Task MigrateAsync();
    }
}
