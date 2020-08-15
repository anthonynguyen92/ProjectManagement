using Volo.Abp.Application.Dtos;

namespace doan.ProjectManagement.SystemSettings.Dto
{
    public class GetSystemSettingInputDto : PagedAndSortedResultRequestDto
    {
        public string Filter { get; set; }
    }
}
