import { StudentDto } from './student-dto';
export class GetStudentDto extends StudentDto {

    constructor(initial: Partial<GetStudentDto> = {}) {
        super(initial);
    }
}