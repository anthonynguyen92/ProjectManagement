using System;
using System.Collections.Generic;
using System.Text;
using StudentManagementProject.Localization;
using Volo.Abp.Application.Services;

namespace StudentManagementProject
{
    /* Inherit your application services from this class.
     */
    public abstract class StudentManagementProjectAppService : ApplicationService
    {
        protected StudentManagementProjectAppService()
        {
            LocalizationResource = typeof(StudentManagementProjectResource);
        }
    }
}
