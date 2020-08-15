using doan.ProjectManagement.Entities;
using doan.ProjectManagement.Enums;
using doan.ProjectManagement.Permissions;
using doan.ProjectManagement.SystemSettings.Dto;
using System;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;

namespace doan.ProjectManagement.SystemSettings
{
    public class SystemSettingApplicationService : BaseAppService<
        SystemSetting, Guid, CreateUpdateSystemSettingDto, GetSystemSettingDto, GetSystemSettingForEditDto, GetSystemSettingForInputDto>,
        ISystemSettingApplicationService
    {

        protected override string CreatePolicyName { get; set; } = ProjectManagementPermissions.SystemSetting.Create;
        protected override string DeletePolicyName { get; set; } = ProjectManagementPermissions.SystemSetting.Delete;
        protected override string UpdatePolicyName { get; set; } = ProjectManagementPermissions.SystemSetting.Update;
        protected override string GetListPolicyName { get; set; } = ProjectManagementPermissions.SystemSetting.Default;
        protected override string GetPolicyName { get; set; } = ProjectManagementPermissions.SystemSetting.Default;
        public SystemSettingApplicationService(IRepository<SystemSetting, Guid> repository) : base(repository)
        {
        }
        // change permission after update admin 

        protected override IQueryable<SystemSetting> CreateFilteredQuery(GetSystemSettingForInputDto input)
        {
            return Repository.WhereIf(!string.IsNullOrWhiteSpace(input.Filter), x => x.Value.Contains(input.Filter));
        }

        public async Task ChangeToggleStatus(Guid id)
        {
            var entity = await Repository.GetAsync(id);
            entity.Status = Status.Active == Status.Inactive ? Status.Inactive : Status.Active;
        }
    }
}
