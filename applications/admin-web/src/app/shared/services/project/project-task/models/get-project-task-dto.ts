import { ProjectTaskDto } from './project-task-dto'

export class GetProjectTaskDto extends ProjectTaskDto {

  constructor(initial: Partial<GetProjectTaskDto> = {}) {
    super(initial);
  }
}
