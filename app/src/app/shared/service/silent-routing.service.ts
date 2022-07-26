import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SilentRoutingService {

  navigate(path: string): void {
    this.router.navigate([path], { skipLocationChange: true })
  }

  constructor(private router: Router) { }
}
