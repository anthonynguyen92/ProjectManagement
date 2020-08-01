import { Status } from './status';
import { EntityDto } from '@abp/ng.core';


export class CreateUpdateSystemSettingDto extends EntityDto<string>{
    key: string;
    value?: String;
    description?: string;
    status?: Status;
    effectDate?: Date;
    expireDate?: Date;
    isEncript: boolean;

    constructor(initialValues: Partial<CreateUpdateSystemSettingDto> = {}) {
        super(initialValues);
    }
}