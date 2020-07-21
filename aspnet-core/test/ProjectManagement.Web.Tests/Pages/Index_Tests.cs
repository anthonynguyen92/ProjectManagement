using System.Threading.Tasks;
using Shouldly;
using Xunit;

namespace ProjectManagement.Pages
{
    public class Index_Tests : ProjectManagementWebTestBase
    {
        [Fact]
        public async Task Welcome_Page()
        {
            var response = await GetResponseAsStringAsync("/");
            response.ShouldNotBeNull();
        }
    }
}
