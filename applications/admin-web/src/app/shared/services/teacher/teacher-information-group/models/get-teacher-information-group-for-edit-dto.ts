import { CreateUpdateTeacherInformationGroupDto } from './create-update-teacher-information-group-dto';

export class GetTeacherInformationGroupForEditDto extends CreateUpdateTeacherInformationGroupDto {
  constructor(initial: Partial<GetTeacherInformationGroupForEditDto> = {}) {
    super(initial);
  }
}
