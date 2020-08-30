const GroupName = 'ProjectManagement';
export class StudentPermission {
  public static Default = GroupName + '.Student';
  public static Create = StudentPermission.Default + '.Create';
  public static Update = StudentPermission.Default + '.Update';
  public static Delete = StudentPermission.Default + '.Delete';
}

export class TeacherPermission {
  public static Default = GroupName + '.Teacher';
  public static Create = TeacherPermission.Default + '.Create';
  public static Update = TeacherPermission.Default + '.Update';
  public static Delete = TeacherPermission.Default + '.Delete';
}

export class StudentGroupPermission {
  public static Default = GroupName + '.StudentGroup';
  public static Create = StudentGroupPermission.Default + '.Create';
  public static Update = StudentGroupPermission.Default + '.Update';
  public static Delete = StudentGroupPermission.Default + '.Delete';
}

export class StudentGroupInformationPermission {
  public static Default = GroupName + '.StudentGroupInformation';
  public static Create = StudentGroupInformationPermission.Default + 'Create'
  public static Update = StudentGroupInformationPermission.Default + '.Update';
  public static Delete = StudentGroupInformationPermission.Default + '.Delete';
}
