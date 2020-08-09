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
