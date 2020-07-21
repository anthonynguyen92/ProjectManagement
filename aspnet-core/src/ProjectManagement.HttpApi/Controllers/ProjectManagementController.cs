using ProjectManagement.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace ProjectManagement.Controllers
{
    /* Inherit your controllers from this class.
     */
    public abstract class ProjectManagementController : AbpController
    {
        protected ProjectManagementController()
        {
            LocalizationResource = typeof(ProjectManagementResource);
        }
    }
}