using Microsoft.EntityFrameworkCore;
using StudentManagementProject.Entities;
using Volo.Abp;
using Volo.Abp.EntityFrameworkCore.Modeling;

namespace StudentManagementProject.EntityFrameworkCore
{
    public static class StudentManagementProjectDbContextModelCreatingExtensions
    {
        public static void ConfigureStudentManagementProject(this ModelBuilder builder)
        {
            Check.NotNull(builder, nameof(builder));

            builder.Entity<Project>(b =>
            {
                b.ToTable(StudentManagementProjectConsts.DbTableProject);
                b.ConfigureByConvention();
            });
            builder.Entity<Student>(b =>
            {
                b.ToTable(StudentManagementProjectConsts.DbTableStudent);
                b.ConfigureByConvention();
            });
            builder.Entity<Teacher>(b =>
            {
                b.ToTable(StudentManagementProjectConsts.DbTableTeacher);
                b.ConfigureByConvention();
            });
            builder.Entity<StudentProject>(b =>
            {
                b.ToTable(StudentManagementProjectConsts.DbTableStudent + "Project");
                b.ConfigureByConvention();
            });
            builder.Entity<TeacherProject>(b =>
            {
                b.ToTable(StudentManagementProjectConsts.DbTableTeacher + "Project");
                b.ConfigureByConvention();
            });
        }
    }
}