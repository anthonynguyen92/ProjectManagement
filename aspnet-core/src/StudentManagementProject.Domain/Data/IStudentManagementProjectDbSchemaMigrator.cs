using System.Threading.Tasks;

namespace StudentManagementProject.Data
{
    public interface IStudentManagementProjectDbSchemaMigrator
    {
        Task MigrateAsync();
    }
}
