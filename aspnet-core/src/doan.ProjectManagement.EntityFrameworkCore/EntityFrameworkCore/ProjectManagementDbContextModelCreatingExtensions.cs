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
                b.ToTable(SystemSettingManagementConsts.DbTablePrefix);
                b.ConfigureByConvention();
            });
        }
    }
}