import { TeacherInformationGroupDto } from "./teacher-information-group-dto"

export class GetTeacherInformationGroupDto extends TeacherInformationGroupDto {

  constructor(initial: Partial<GetTeacherInformationGroupDto> = {}) {
    super(initial);
  }
}
