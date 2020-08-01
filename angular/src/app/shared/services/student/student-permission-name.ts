const GroupName = 'StudentManagement';
export class StudentPermission{
    public static Default = GroupName + '.Student';
    public static Create  = StudentPermission.Default + '.Create';
    public static Update  = StudentPermission.Default + '.Update';
    public static Delete  = StudentPermission.Default + '.Delete';
}