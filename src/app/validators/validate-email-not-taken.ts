import { AbstractControl, AsyncValidator, ValidationErrors, FormControl, FormGroup } from '@angular/forms';
import { EmailService } from '../services/email.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { LoaderInterceptorService } from '../services/loader-interceptor.service';
import { LoaderService } from '../services/loader.service';

export class ValidateEmailNotTaken {
  static createValidator(emailService: EmailService) {
    const message = {
      'ValidateEmailNotTaken': {
        'message': 'Email is taken'
      }
    };
    return (control: AbstractControl) => {
      return emailService.checkEmailNotTaken(control.value).pipe(map(res => {
        // return res ? null : { emailTaken: true };
        return res ? null : message;
        // return res ? { emailNotTaken: true } : { emailTaken: true };
      }));
    };
  }
}
