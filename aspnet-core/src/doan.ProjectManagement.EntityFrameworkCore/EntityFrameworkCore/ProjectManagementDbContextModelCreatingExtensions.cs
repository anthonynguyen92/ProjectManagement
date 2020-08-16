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

            /* Configure your own tables/entities inside here */

            //builder.Entity<YourEntity>(b =>
            //{
            //    b.ToTable(ProjectManagementConsts.DbTablePrefix + "YourEntities", ProjectManagementConsts.DbSchema);
            //    b.ConfigureByConvention(); //auto configure for the base class props
            //    //...
            //});

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

        }
    }
}