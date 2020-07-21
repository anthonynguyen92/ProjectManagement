using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;

namespace StudentManagementProject.HttpApi.Client.ConsoleTestApp
{
    [DependsOn(
        typeof(StudentManagementProjectHttpApiClientModule),
        typeof(AbpHttpClientIdentityModelModule)
        )]
    public class StudentManagementProjectConsoleApiClientModule : AbpModule
    {
        
    }
}
