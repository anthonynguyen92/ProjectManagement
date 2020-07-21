using ProjectManagement.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace ProjectManagement
{
    [DependsOn(
        typeof(ProjectManagementEntityFrameworkCoreTestModule)
        )]
    public class ProjectManagementDomainTestModule : AbpModule
    {

    }
}