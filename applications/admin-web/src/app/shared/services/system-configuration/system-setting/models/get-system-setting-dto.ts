import { SystemSettingDto } from './system-setting-dto';

export class GetSystemSettingDto extends SystemSettingDto {
    constructor(initialValues: Partial<GetSystemSettingDto> = {}) {
        super(initialValues);
    }
}