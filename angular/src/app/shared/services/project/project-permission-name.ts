const GroupName = 'ProjectManagement';

export class ProjectPermission {
  public static Default = GroupName + '.Project';
  public static Create = ProjectPermission.Default + '.Create';
  public static Update = ProjectPermission.Default + '.Update';
  public static Delete = ProjectPermission.Default + '.Delete';
}

export class ProjectInformationPermission {
  public static Default = GroupName + '.ProjectInformation';
  public static Create = ProjectInformationPermission.Default + '.Create';
  public static Update = ProjectInformationPermission.Default + '.Update';
  public static Delete = ProjectInformationPermission.Default + '.Delete';
}

