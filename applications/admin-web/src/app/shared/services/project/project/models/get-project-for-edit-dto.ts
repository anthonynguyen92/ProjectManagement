import { CreateOrUpdateProjectDto } from './create-update-project-dto';

export class GetProjectForEditDto extends CreateOrUpdateProjectDto {

  constructor(initial: Partial<GetProjectForEditDto> = {}) {
    super(initial);
  }
}
