using Microsoft.EntityFrameworkCore;
using Volo.Abp;

namespace ProjectManagement.EntityFrameworkCore
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
        }
    }
}