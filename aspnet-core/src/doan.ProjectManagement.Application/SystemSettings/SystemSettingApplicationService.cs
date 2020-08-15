using doan.ProjectManagement.Entities;
using doan.ProjectManagement.Permissions;
using doan.ProjectManagement.SystemSettings.Dto;
using System;
using System.Linq;
using Volo.Abp.Domain.Repositories;

namespace doan.ProjectManagement.SystemSettings
{
    public class SystemSettingApplicationService : BaseAppService<SystemSetting
        , Guid, CreateUpdateSystemDto, GetSystemSettingDto,
        GetSystemSettingForEditDto, GetSystemSettingInputDto>,
        ISystemSettingApplicationService
    {

        protected override string GetListPolicyName { get; set; } = ProjectManagementPermissions.SystemSetting.Default;
        protected override string GetPolicyName { get; set; } = ProjectManagementPermissions.SystemSetting.Default;
        protected override string UpdatePolicyName { get; set; } = ProjectManagementPermissions.SystemSetting.Update;
        protected override string DeletePolicyName { get; set; } = ProjectManagementPermissions.SystemSetting.Delete;
        protected override string CreatePolicyName { get; set; } = ProjectManagementPermissions.SystemSetting.Create;
        public SystemSettingApplicationService(IRepository<SystemSetting, Guid> repository) : base(repository)
        {
        }

        protected override IQueryable<SystemSetting> CreateFilteredQuery(GetSystemSettingInputDto input)
        {
            return Repository.WhereIf(!string.IsNullOrWhiteSpace(input.Filter), x => x.Value.Contains(input.Filter));
        }
    }
}
