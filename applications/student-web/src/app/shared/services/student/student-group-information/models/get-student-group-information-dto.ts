import { StudentGroupInformationDto } from './student-group-information-dto';

export class GetStudentGroupInformationDto extends StudentGroupInformationDto {

  constructor(initial: Partial<GetStudentGroupInformationDto> = {}) {
    super(initial);
  }
}
