using doan.ProjectManagement.SystemSettings.Dto;
using System;
using System.Threading.Tasks;

namespace doan.ProjectManagement.SystemSettings
{
    public interface ISystemSettingApplicationService : IBaseAppService<
        Guid, CreateUpdateSystemSettingDto, GetSystemSettingDto, GetSystemSettingForEditDto, GetSystemSettingForInputDto>
    {
        Task ChangeToggleStatus(Guid id);
    }
}
