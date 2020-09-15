using doan.ProjectManagement.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace doan.ProjectManagement
{
    [DependsOn(
        typeof(ProjectManagementEntityFrameworkCoreTestModule)
        )]
    public class ProjectManagementDomainTestModule : AbpModule
    {

    }
}