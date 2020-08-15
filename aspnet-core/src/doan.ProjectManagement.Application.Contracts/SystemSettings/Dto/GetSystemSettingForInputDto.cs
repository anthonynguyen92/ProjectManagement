using Volo.Abp.Application.Dtos;

namespace doan.ProjectManagement.SystemSettings.Dto
{
    public class GetSystemSettingForInputDto : PagedAndSortedResultRequestDto
    {
        public string Filter { get; set; }
    }
}
