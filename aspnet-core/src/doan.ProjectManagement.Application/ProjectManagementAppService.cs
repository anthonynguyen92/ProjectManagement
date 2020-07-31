using System;
using System.Collections.Generic;
using System.Text;
using doan.ProjectManagement.Localization;
using Volo.Abp.Application.Services;

namespace doan.ProjectManagement
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
