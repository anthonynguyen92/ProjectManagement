import { CreateUpdateStudentDto } from './create-update-student-dto';
export class GetStudentForEditDto extends CreateUpdateStudentDto {

    constructor(initial: Partial<GetStudentForEditDto> = {}) {
        super(initial);
    }
}