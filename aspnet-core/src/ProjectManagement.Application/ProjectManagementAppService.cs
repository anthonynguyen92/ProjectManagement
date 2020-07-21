using System;
using System.Collections.Generic;
using System.Text;
using ProjectManagement.Localization;
using Volo.Abp.Application.Services;

namespace ProjectManagement
{
    /* Inherit your application services from this class.
     */
    public abstract class ProjectManagementAppService : ApplicationService
    {
        protected ProjectManagementAppService()
        {
            LocalizationResource = typeof(ProjectManagementResource);
        }
    }
}
