using Volo.Abp.Application.Dtos;

namespace StudentManagementProject
{
    internal interface IBaseAppService<TPrimaryKey, TCreateUpdate, TViewOutput, TEditOutput, TGetAllInput>
        where TPrimaryKey : struct
        where TCreateUpdate : EntityDto<TPrimaryKey?>
        where TViewOutput : EntityDto<TPrimaryKey>
        where TEditOutput : EntityDto<TPrimaryKey?>
        where TGetAllInput : PagedAndSortedResultRequestDto
    {
    }
}