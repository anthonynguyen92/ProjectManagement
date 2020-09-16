import { StudentGroupDto } from './student-group-dto'

export class GetStudentGroupDto extends StudentGroupDto {

  constructor(initial: Partial<GetStudentGroupDto> = {}) {
    super(initial);
  }
}
