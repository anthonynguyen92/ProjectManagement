using doan.ProjectManagement.Entities;
using doan.ProjectManagement.Users;
using Microsoft.EntityFrameworkCore;
using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore.Modeling;
using Volo.Abp.Identity;
using Volo.Abp.Users.EntityFrameworkCore;

namespace doan.ProjectManagement.EntityFrameworkCore
{
    /* This is your actual DbContext used on runtime.
     * It includes only your entities.
     * It does not include entities of the used modules, because each module has already
     * its own DbContext class. If you want to share some database tables with the used modules,
     * just create a structure like done for AppUser.
     *
     * Don't use this DbContext for database migrations since it does not contain tables of the
     * used modules (as explained above). See ProjectManagementMigrationsDbContext for migrations.
     */
    [ConnectionStringName("Default")]
    public class ProjectManagementDbContext : AbpDbContext<ProjectManagementDbContext>
    {
        public DbSet<AppUser> Users { get; set; }
        public DbSet<Student> Students { get; set; }
        public DbSet<Teacher> Teachers { get; set; }
        public DbSet<SystemSetting> SystemSettings { get; set; }
        public DbSet<StudentGroup> StudentGroups { get; set; }
        public DbSet<StudentGroupInformation> StudentGroupInformations { get; set; }
        public DbSet<ProjectInformation> ProjectInformations { get; set; }
        public DbSet<Project> Projects { get; set; }
        public DbSet<ProjectRequest> ProjectRequests { get; set; }
        public DbSet<TeacherInformationGroup> TeacherInformationGroups { get; set; }
        public DbSet<ProjectTask> ProjectTasks { get; set; }

        public ProjectManagementDbContext(DbContextOptions<ProjectManagementDbContext> options)
            : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            /* Configure the shared tables (with included modules) here */

            builder.Entity<AppUser>(b =>
            {
                b.ToTable(AbpIdentityDbProperties.DbTablePrefix + "Users");
                b.ConfigureByConvention();
                b.ConfigureAbpUser();
            });
            builder.ConfigureProjectManagement();
        }
    }
}
