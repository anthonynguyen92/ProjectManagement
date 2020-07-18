using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Abp.Modules;
using Abp.Reflection.Extensions;
using ProjectManagement.Configuration;

namespace ProjectManagement.Web.Host.Startup
{
    [DependsOn(
       typeof(ProjectManagementWebCoreModule))]
    public class ProjectManagementWebHostModule: AbpModule
    {
        private readonly IWebHostEnvironment _env;
        private readonly IConfigurationRoot _appConfiguration;

        public ProjectManagementWebHostModule(IWebHostEnvironment env)
        {
            _env = env;
            _appConfiguration = env.GetAppConfiguration();
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(ProjectManagementWebHostModule).GetAssembly());
        }
    }
}
