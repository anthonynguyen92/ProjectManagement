import { CreateOrUpdateStudentGroupInformationDto } from './create-update-student-group-information-dto';

export class GetStudentGroupInformationForEditDto extends CreateOrUpdateStudentGroupInformationDto {

  constructor(initial: Partial<GetStudentGroupInformationForEditDto> = {}) {
    super(initial);
  }
}
