using AutoMapper;
using doan.ProjectManagement.Entities;
using doan.ProjectManagement.SystemSettings.Dto;

namespace doan.ProjectManagement.SystemSettings
{
    public class SystemSettingMapperProfile : Profile

    {
        public SystemSettingMapperProfile()
        {
            CreateMap<SystemSetting, SystemSettingDto>(MemberList.None);
            CreateMap<SystemSettingDto, SystemSetting>(MemberList.None);
            CreateMap<SystemSetting, GetSystemSettingDto>(MemberList.None);
            CreateMap<SystemSetting, GetSystemSettingForEditDto>(MemberList.None);
            CreateMap<CreateUpdateSystemSettingDto, SystemSetting>(MemberList.None);
        }
    }
}
