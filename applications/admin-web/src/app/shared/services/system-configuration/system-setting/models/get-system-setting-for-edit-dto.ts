import { CreateUpdateSystemSettingDto } from './create-update-system-setting-dto';

export class GetSystemSettingForEditDto extends CreateUpdateSystemSettingDto {
    constructor(initial: Partial<GetSystemSettingForEditDto> = {}) {
        super(initial);
    }
}