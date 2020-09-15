using AutoMapper;
using doan.ProjectManagement.Entities;
using doan.ProjectManagement.SystemSettings.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace doan.ProjectManagement.SystemSettings
{
    class SystemSettingAutoMapperProfile : Profile
    {
        public SystemSettingAutoMapperProfile()
        {
            CreateMap<SystemSetting, SystemSettingDto>(MemberList.None);
            CreateMap<SystemSettingDto, SystemSetting>(MemberList.None);
            CreateMap<SystemSetting, GetSystemSettingDto>(MemberList.None);
            CreateMap<SystemSetting, GetSystemSettingForEditDto>(MemberList.None);
            CreateMap<CreateUpdateSystemDto, SystemSetting>(MemberList.None);
        }
    }
}
