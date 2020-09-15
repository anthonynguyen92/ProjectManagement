import {
  Directive,
  ViewContainerRef,
  ComponentRef,
  ComponentFactoryResolver,
  AfterViewInit,
  Renderer2,
  ElementRef,
  ContentChild,
  Injector,
} from '@angular/core';
import { NgControl } from '@angular/forms';

import { MatErrorComponent } from './mat-error-component';
import { MatInput } from '@angular/material/input';
import { MatFormField } from '@angular/material/form-field';
import { AppBaseComponent } from '../app.base.component';

@Directive({
  selector: 'mat-form-field',
})
export class MongoIndexLimitDirective extends AppBaseComponent implements AfterViewInit {
  ref: ComponentRef<MatErrorComponent>;
  control: NgControl;
  @ContentChild(MatInput, { read: ElementRef }) controlElementRef: ElementRef;
  constructor(
    protected readonly _injector: Injector,
    private vcr: ViewContainerRef,
    private resolver: ComponentFactoryResolver,
    private formField: MatFormField,
    private renderer: Renderer2,
    private el: ElementRef
  ) {
    super(_injector);
  }
  // "RequiredError":"This field is required",
  // "EmailError":"Email is incorrect",
  // "PhoneNumberError":"Phonenumber is incorrect",
  // "DateTimeError":"format required: dd/mm/yyyy"
  defaultErrors = {
    minlength: ({ requiredLength, actualLength }) =>
    this.l('SystemConfiguration::MinlengthError').replace('B', requiredLength),
    maxlength: ({ requiredLength, actualLength }) =>
    this.l('SystemConfiguration::MaxlengthError').replace('B', requiredLength),
    error: (error) => error,
    email: (error) => this.l('SystemConfiguration::EmailError'),
    required: (error) => this.l('SystemConfiguration::RequiredError'),
    matDatepickerParse:  (text) => this.l('SystemConfiguration::DateTimeError'),
  };
  public ngAfterViewInit() {
    this.control = this.formField._control.ngControl;
    if (this.controlElementRef) {
      this.renderer.listen(this.controlElementRef.nativeElement, 'blur', () => this.onChange(null));
    }
    if (this.control) {
      this.control.statusChanges.subscribe((res) => this.onChange(res));
    }
  }

  public onChange(res) {
    if (this.control.invalid && this.control.touched) {
      let error: string = this.formField._control.placeholder + ' incorrect';
      Object.keys(this.defaultErrors).forEach((k) => {
        console.log(k, this.control.hasError(k), this.control.errors[k]);
        if (this.control.hasError(k)) 
        {
            error = this.defaultErrors[k](this.control.errors[k]);
        }
      });
      this.setError(error);
    } else this.setError('');
  }
  setError(text: string) {
    if (!this.ref) {
      const factory = this.resolver.resolveComponentFactory(MatErrorComponent);
      this.formField._elementRef;
      this.ref = this.vcr.createComponent(factory);
    }
    this.ref.instance.error = text;
  }
}
