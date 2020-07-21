using StudentManagementProject.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace StudentManagementProject
{
    [DependsOn(
        typeof(StudentManagementProjectEntityFrameworkCoreTestModule)
        )]
    public class StudentManagementProjectDomainTestModule : AbpModule
    {

    }
}