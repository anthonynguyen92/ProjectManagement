using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;

namespace ProjectManagement.HttpApi.Client.ConsoleTestApp
{
    [DependsOn(
        typeof(ProjectManagementHttpApiClientModule),
        typeof(AbpHttpClientIdentityModelModule)
        )]
    public class ProjectManagementConsoleApiClientModule : AbpModule
    {
        
    }
}
