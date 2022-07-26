import { Injectable } from '@angular/core';
import { Datetime } from '../interface/datetime';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  currentDate!: Datetime

  today = new Date()

  constructor() { }
}
