using doan.ProjectManagement.SystemSettings.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace doan.ProjectManagement.SystemSettings
{
    public interface ISystemSettingAppService : IBaseAppService<
        Guid, CreateUpdateSystemDto, GetSystemSettingDto, GetSystemSettingForEditDto, GetSystemSettingInputDto>
    {
    }
}
