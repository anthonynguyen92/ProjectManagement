using ProjectManagement.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace ProjectManagement.Web.Pages
{
    /* Inherit your PageModel classes from this class.
     */
    public abstract class ProjectManagementPageModel : AbpPageModel
    {
        protected ProjectManagementPageModel()
        {
            LocalizationResourceType = typeof(ProjectManagementResource);
        }
    }
}