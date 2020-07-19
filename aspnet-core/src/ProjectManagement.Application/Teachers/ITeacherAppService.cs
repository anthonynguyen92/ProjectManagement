using Abp.Application.Services;
using ProjectManagement.Teachers.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace ProjectManagement.Teachers
{
    interface ITeacherAppService:IAsyncCrudAppService<TeacherDto,Guid,
        PagedTeacherResultRequest,CreateUpdateTeacherDto,CreateUpdateTeacherDto,
        GetTeacherForEditDto>
    {
    }
}
