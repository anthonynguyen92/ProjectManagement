using System.Threading.Tasks;

namespace doan.ProjectManagement.Data
{
    public interface IProjectManagementDbSchemaMigrator
    {
        Task MigrateAsync();
    }
}
