import { Directive } from '@angular/core';
import { Validator, AbstractControl, FormControl, NG_VALIDATORS } from '@angular/forms';
import * as moment from 'moment';
const NAME = 'appValidDate';

@Directive({
  selector: `[${NAME}][formControlName],[${NAME}][formControl],[${NAME}][ngModel]`,
  providers: [{ provide: NG_VALIDATORS, useExisting: DateDirective, multi: true }]
})
export class DateDirective implements Validator {
  validate(control: FormControl): { [key: string]: any } {
    const value = control.value;
    return !moment(value).isValid() ? { [NAME]: true } : null;
  }
}
