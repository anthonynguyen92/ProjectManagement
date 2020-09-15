import { Status } from './status';
import { EntityDto } from "@abp/ng.core";

export class SystemSettingDto extends EntityDto<string>{
  key: string;
  value?: String;
  description?: string;
  status?: Status;
  effectDate?: Date;
  expireDate?: Date;

  constructor(initialValues: Partial<SystemSettingDto>) {
    super(initialValues);
  }
}
