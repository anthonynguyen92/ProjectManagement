import { CreateOrEditStudentGroupDto } from './create-update-student-group-dto';

export class GetStudentGroupForEditDto extends CreateOrEditStudentGroupDto {

  constructor(initial: Partial<GetStudentGroupForEditDto> = {}) {
    super(initial);
  }
}
