using doan.ProjectManagement.Entities;
using Microsoft.EntityFrameworkCore;
using Volo.Abp;
using Volo.Abp.EntityFrameworkCore.Modeling;

namespace doan.ProjectManagement.EntityFrameworkCore
{
    public static class ProjectManagementDbContextModelCreatingExtensions
    {
        public static void ConfigureProjectManagement(this ModelBuilder builder)
        {
            Check.NotNull(builder, nameof(builder));

            builder.Entity<Student>(b =>
            {
                b.ToTable(StudentManagementConsts.DbTablePrefix + ".Student");
                b.ConfigureByConvention();
            });

            builder.Entity<Teacher>(b =>
            {
                b.ToTable(TeacherManagementConsts.DbTablePrefix + ".Teacher");
                b.ConfigureByConvention();
            });
            builder.Entity<SystemSetting>(b =>
            {
                b.ToTable(SystemSettingManagementConsts.DbTablePrefix + ".SystemSetting");
                b.ConfigureByConvention();
            });
            builder.Entity<StudentGroup>(b =>
            {
                b.ToTable("StudentGroup");
                b.ConfigureByConvention();
            });
            builder.Entity<StudentGroupInformation>(b =>
            {
                b.ToTable("StudentGroupInformation");
                b.ConfigureByConvention();
            });
            builder.Entity<ProjectInformation>(b =>
            {
                b.ToTable("ProjectInformation");
                b.ConfigureByConvention();
            });
            builder.Entity<Project>(b =>
            {
                b.ToTable("Project");
                b.ConfigureByConvention();
            });
            builder.Entity<ProjectRequest>(b =>
            {
                b.ToTable("ProjectRequest");
                b.ConfigureByConvention();
            });
            builder.Entity<TeacherInformationGroup>(b =>
            {
                b.ToTable("TeacherInformationGroup");
                b.ConfigureByConvention();
            });
            builder.Entity<ProjectTask>(b =>
            {
                b.ToTable("ProjectTask");
                b.ConfigureByConvention();
            });
        }
    }
}