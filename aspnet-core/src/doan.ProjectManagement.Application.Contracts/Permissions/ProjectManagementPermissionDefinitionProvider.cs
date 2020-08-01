﻿using doan.ProjectManagement.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace doan.ProjectManagement.Permissions
{
    public class ProjectManagementPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            #region student
            var studentGroup = context.AddGroup(ProjectManagementPermissions.GroupName,L("Permission:StudentManagement"));

            var student = studentGroup.AddPermission(ProjectManagementPermissions.Student.Default, L("Permission:Student"));
            student.AddChild(ProjectManagementPermissions.Student.Create, L("Permission:Create"));
            student.AddChild(ProjectManagementPermissions.Student.Update, L("Permission:Update"));
            student.AddChild(ProjectManagementPermissions.Student.Delete, L("Permission:Delete"));
            #endregion

            #region teacher
            var teacherGroup = context.AddGroup(ProjectManagementPermissions.GroupName, L("Permission:TeacherManagement"));

            var teacher = teacherGroup.AddPermission(ProjectManagementPermissions.Teacher.Default, L("Permission:Teacher"));
            teacher.AddChild(ProjectManagementPermissions.Teacher.Create, L("Permission:Create"));
            teacher.AddChild(ProjectManagementPermissions.Teacher.Update, L("Permission:Update"));
            teacher.AddChild(ProjectManagementPermissions.Teacher.Delete, L("Permission:Delete"));
            #endregion

        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<ProjectManagementResource>(name);
        }
    }
}
