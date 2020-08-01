using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace doan.ProjectManagement
{
    public interface IBaseAppService<
        TPrimaryKey,
        in TCreateUpdate,
        TViewOutput,
        TEditOutput,
        in TGetAllInput> : IApplicationService
        where TPrimaryKey : struct
        where TCreateUpdate : EntityDto<TPrimaryKey?>
        where TViewOutput : EntityDto<TPrimaryKey>
        where TEditOutput : EntityDto<TPrimaryKey?>
        where TGetAllInput : PagedAndSortedResultRequestDto

    {
        Task<PagedResultDto<TViewOutput>> GetListPaged(TGetAllInput input);
        Task<TEditOutput> Get(TPrimaryKey id);
        Task Delete(TPrimaryKey id);
        Task<TPrimaryKey> Save(TCreateUpdate input);
        Task<List<TViewOutput>> GetAll();
    }
}
