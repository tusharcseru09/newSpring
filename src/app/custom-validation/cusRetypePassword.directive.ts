import { NG_VALIDATORS, Validator, ValidationErrors, AbstractControl } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[appConfirmPasswordValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: CusRetypePasswordDirective,
        multi: true
    }]
})
export class CusRetypePasswordDirective implements Validator {

    @Input() appConfirmPasswordValidator: string;
    validate(control: AbstractControl): {[key:string]:any} | null {
        
        const controlToCompare = control.parent.get(this.appConfirmPasswordValidator);
        if ( control.value!=='' && 
             control.value!==controlToCompare.value && controlToCompare )
        {
            return {notequal: true }
        }
        return null;
        
    }


}