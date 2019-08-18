import { FormGroup, Validators, FormControl  } from '@angular/forms';
import { AbstractControl } from '@angular/forms';

export class Questions extends Validators {
  static questionCheck(group: FormGroup) {
    const message = {
      'group.controls.QuestionValidator.questionCheck': {
        'message': 'Invalid Selection'
          }
      };
    if (group.controls.question.errors || group.controls.question.value === null) {
      console.log('Question Not Selected');
      return message;
    }
  }
}
