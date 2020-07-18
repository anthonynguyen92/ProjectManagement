using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using ProjectManagement.Authorization.Roles;
using ProjectManagement.Authorization.Users;
using ProjectManagement.MultiTenancy;

namespace ProjectManagement.EntityFrameworkCore
{
    public class ProjectManagementDbContext : AbpZeroDbContext<Tenant, Role, User, ProjectManagementDbContext>
    {
        /* Define a DbSet for each entity of the application */
        
        public ProjectManagementDbContext(DbContextOptions<ProjectManagementDbContext> options)
            : base(options)
        {
        }
    }
}
