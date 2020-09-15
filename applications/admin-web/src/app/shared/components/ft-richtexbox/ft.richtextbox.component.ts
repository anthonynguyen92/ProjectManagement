import { Component, Input } from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";

@Component({
    selector: 'ft-richtext-editor',
    templateUrl: './ft.richtextbox.component.html',
    providers: [
        { provide: NG_VALUE_ACCESSOR, useExisting: RichTextEditorComponent, multi: true }
    ]
})
export class RichTextEditorComponent implements ControlValueAccessor {

    private innerValue: string = null;
    private onChange = new Array<(value) => void>();
    private onTouch = new Array<() => void>();

    @Input()
    height: number;

    @Input()
    required: boolean | string;

    @Input()
    fieldname: string;

    @Input()
    disabled: boolean;

    @Input()
    readonly = false;

    get heightValue(): string{
        if(this.height){
            return `${this.height}px`;
        }
        return '250px';
    }

    get value(): string{
        return this.innerValue;
    }

    @Input()
    set value(value: string){
        if(this.innerValue !== value){
            this.innerValue = value;
            this.onChange.forEach(f => f(value));
        }
    }
    touch() {
        this.onTouch.forEach(f => f());
    }

    writeValue(obj: any): void {
        if (obj) {
            this.innerValue = obj;
        }
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