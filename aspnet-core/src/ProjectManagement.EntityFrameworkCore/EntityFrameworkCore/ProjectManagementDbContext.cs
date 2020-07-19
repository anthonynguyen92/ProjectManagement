using Abp.Zero.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using ProjectManagement.Authorization.Roles;
using ProjectManagement.Authorization.Users;
using ProjectManagement.Entites;
using ProjectManagement.MultiTenancy;

namespace ProjectManagement.EntityFrameworkCore
{
    public class ProjectManagementDbContext : AbpZeroDbContext<Tenant, Role, User, ProjectManagementDbContext>
    {
        /* Define a DbSet for each entity of the application */
        public DbSet<Project> projects { get; set; }
        public DbSet<Student> students { get; set; }
        public DbSet<StudentProject> studentProjects { get; set; }
        public DbSet<Teacher> teachers { get; set; }
        public DbSet<TeacherProject> teacherProjects { get; set; }
        public ProjectManagementDbContext(DbContextOptions<ProjectManagementDbContext> options)
            : base(options)
        {
        }
        
    }
}
