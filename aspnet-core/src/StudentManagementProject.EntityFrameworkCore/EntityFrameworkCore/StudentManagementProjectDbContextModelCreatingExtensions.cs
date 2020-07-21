using Microsoft.EntityFrameworkCore;
using Volo.Abp;

namespace StudentManagementProject.EntityFrameworkCore
{
    public static class StudentManagementProjectDbContextModelCreatingExtensions
    {
        public static void ConfigureStudentManagementProject(this ModelBuilder builder)
        {
            Check.NotNull(builder, nameof(builder));

            /* Configure your own tables/entities inside here */

            //builder.Entity<YourEntity>(b =>
            //{
            //    b.ToTable(StudentManagementProjectConsts.DbTablePrefix + "YourEntities", StudentManagementProjectConsts.DbSchema);
            //    b.ConfigureByConvention(); //auto configure for the base class props
            //    //...
            //});
        }
    }
}