using doan.ProjectManagement.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace doan.ProjectManagement.Controllers
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