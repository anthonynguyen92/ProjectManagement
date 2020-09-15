const GroupName = 'ProjectManagement';
export class UserPermission{
    public static Default = 'AbpIdentity.Users';
    public static Create  = UserPermission.Default + '.Create';
    public static Update  = UserPermission.Default + '.Update';
    public static Delete  = UserPermission.Default + '.Delete';
}

export class SystemSettingPermission{
    public static Default = GroupName + '.SystemSetting';
    public static Create  = SystemSettingPermission.Default + '.Create';
    public static Update  = SystemSettingPermission.Default + '.Update';
    public static Delete  = SystemSettingPermission.Default + '.Delete';
}

export class RolesPermission {
    public static Default = GroupName + '.Roles';
    public static Create  = RolesPermission.Default + '.Create';
    public static Update  = RolesPermission.Default + '.Update';
    public static Delete  = RolesPermission.Default + '.Delete';
}
