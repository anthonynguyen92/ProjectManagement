using StudentManagementProject.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace StudentManagementProject.Controllers
{
    /* Inherit your controllers from this class.
     */
    public abstract class StudentManagementProjectController : AbpController
    {
        protected StudentManagementProjectController()
        {
            LocalizationResource = typeof(StudentManagementProjectResource);
        }
    }
}