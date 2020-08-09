import { CreateOrEditTeacherDto } from './create-update-teacher.dto';

export class GetTeacherForEditDto extends CreateOrEditTeacherDto {
  constructor(initial: Partial<GetTeacherForEditDto> = {}) {
    super(initial);
  }
}
