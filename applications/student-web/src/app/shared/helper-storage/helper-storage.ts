import { GetStudentDto } from '../services/student/models';

export class HelperStorage{
    static setCurrentStudent(studentInfo: GetStudentDto) {
        localStorage.setItem('CurrentStudent', JSON.stringify(studentInfo || undefined));
    }

    static getCurrentStudent(): GetStudentDto {
        return JSON.parse(localStorage.getItem('CurrentStudent') || null);
    }
}
