import { Component, forwardRef, Input, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl } from '@angular/forms';
import * as moment from 'moment';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
    selector: 'ft-datepicker',
    templateUrl: './ft-datepicker.component.html',
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => DatepickerComponent),
        multi: true
    }]
})

export class DatepickerComponent implements ControlValueAccessor {
    private innerValue: moment.Moment;
    private onChange = new Array<(value) => void>();
    private onTouch = new Array<() => void>();

    model: FormControl;
    @Input() placeholder: string;
    @Input() min: Date;
    @Input() max: Date;
    @Input() disabled: boolean;
    @Output() onDateChange = new EventEmitter();

    get minValue() {
        if (this.min) {
            return new Date(this.min);
        }

        return null;
    }

    get maxValue() {
        if (this.max) {
            return new Date(this.max);
        }

        return null;
    }

    get value(): moment.Moment {
        return this.innerValue;
    }

    set value(value: moment.Moment) {
        if (this.innerValue !== value) {
            this.innerValue = value;
            this.onChange.forEach(f => f(value));
        }
    }

    constructor() {
        this.value = null;
        this.model = new FormControl(null);
    }

    handleChange(event: MatDatepickerInputEvent<Date>) {
        this.value = moment(event.value);
        this.onDateChange.emit(this.value);
    }

    writeValue(obj: any): void {
        if (obj) {
            const date = moment(obj);
            if (date.isValid()) {
                this.model = new FormControl(date.toDate());
                this.innerValue = date;
                return;
            }
        }
        this.innerValue = null;
        this.model = null;
    }

    registerOnChange(fn: any): void {
        this.onChange.push(fn);
    }
    registerOnTouched(fn: any): void {
        this.onTouch.push(fn);
    }

    setDisabledState?(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

}
