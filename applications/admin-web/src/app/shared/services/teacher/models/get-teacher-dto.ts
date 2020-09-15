import { TeacherDto } from './teacher-dto';

export class GetTeacherDto extends TeacherDto {

  constructor(initial: Partial<GetTeacherDto> = {}) {
    super(initial);
  }
}
