import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TabBarService {
  subject = new BehaviorSubject(0);
  constructor() {}

}
