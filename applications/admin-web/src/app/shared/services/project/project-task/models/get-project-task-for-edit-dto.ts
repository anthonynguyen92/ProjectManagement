import { CreateUpdateProjectTaskDto } from './create-update-project-task-dto';

export class GetProjectTaskForEditDto extends CreateUpdateProjectTaskDto {

  constructor(initial: Partial<GetProjectTaskForEditDto> = {}) {
    super(initial);
  }
}
