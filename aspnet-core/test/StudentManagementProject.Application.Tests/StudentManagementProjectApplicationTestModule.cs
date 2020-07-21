using Volo.Abp.Modularity;

namespace StudentManagementProject
{
    [DependsOn(
        typeof(StudentManagementProjectApplicationModule),
        typeof(StudentManagementProjectDomainTestModule)
        )]
    public class StudentManagementProjectApplicationTestModule : AbpModule
    {

    }
}