import { FormGroup, Validators, FormControl  } from '@angular/forms';
import { AbstractControl } from '@angular/forms';

export class PasswordValidator extends Validators {

  static passwordMatch(group: FormGroup) {
      console.log('HI 1');
      const message = {
        'group.controls.PasswordValidator.passwordMatch': {
          'message': 'Passwords do not match'
            }
        };
      if (group.controls.password1.errors && !group.controls.password2.errors.passwordMatch) {
        console.log('HI 2');
        return;
    }

      if (group.controls.password1.value !== group.controls.password2.value) {
        console.log('HI 3' + JSON.stringify(message));
        return message;
      } else {
        console.log('HI 4');
        return (null);
      }
    }
  }
