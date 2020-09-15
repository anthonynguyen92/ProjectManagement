using doan.Shared.Eto;
using Microsoft.AspNetCore.Identity;
using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;
using Volo.Abp.EventBus.Distributed;
using Volo.Abp.Guids;
using Volo.Abp.Identity;

namespace doan.ProjectManagement.IdentityServer
{
    public class TeacherCreateDistributedEventHandler : IDistributedEventHandler<TeacherEto>, ITransientDependency
    {
        private readonly IdentityUserManager _userManager;
        private readonly IdentityRoleManager _roleManager;
        private readonly IGuidGenerator _guidGenerator;
        private readonly IDistributedEventBus _distributedEventBus;

        public TeacherCreateDistributedEventHandler(IdentityUserManager userManager, IdentityRoleManager roleManager,
            IGuidGenerator guidGenerator, IDistributedEventBus distributedEventBus)
        {
            _distributedEventBus = distributedEventBus;
            _userManager = userManager;
            _roleManager = roleManager;
            _guidGenerator = guidGenerator;
        }


        public async Task HandleEventAsync(TeacherEto eventData)
        {

            if (await _userManager.FindByNameAsync(eventData.Email) != null)
            {
                return;
            }

            var user = new Volo.Abp.Identity.IdentityUser(
                _guidGenerator.Create(),
                eventData.Email,
                eventData.Email,
                eventData.CurrentTenantId)
            {
                Name = eventData.Name
            };

            var role = await _roleManager.FindByNameAsync("teacher");

            if (role != null)
                user.AddRole(role.Id);

            (await _userManager.CreateAsync(user, "1q2w3E*")).CheckErrors();

            if (role == null)
                await _userManager.AddDefaultRolesAsync(user);
            await _distributedEventBus.PublishAsync(new NewTeacherUserEto
            {
                Email = eventData.Email,
                Name = eventData.Name,
                Password = "1q2w3E*",
                UserName = eventData.Email
            });
        }
    }
}
