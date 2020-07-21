using Volo.Abp.Modularity;

namespace ProjectManagement
{
    [DependsOn(
        typeof(ProjectManagementApplicationModule),
        typeof(ProjectManagementDomainTestModule)
        )]
    public class ProjectManagementApplicationTestModule : AbpModule
    {

    }
}