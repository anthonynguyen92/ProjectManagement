using Volo.Abp.Modularity;

namespace doan.ProjectManagement
{
    [DependsOn(
        typeof(ProjectManagementApplicationModule),
        typeof(ProjectManagementDomainTestModule)
        )]
    public class ProjectManagementApplicationTestModule : AbpModule
    {

    }
}