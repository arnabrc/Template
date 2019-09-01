import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from '../services/app.service';

@Injectable({
  providedIn: 'root'
})

export class DataResolverService implements Resolve<Observable<string>> {

  constructor(public appService: AppService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.appService.getJSON();
  }

}
