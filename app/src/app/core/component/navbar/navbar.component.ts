import { Component, OnInit } from '@angular/core';
import { SilentRoutingService } from 'src/app/shared/service/silent-routing.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public silentRouting: SilentRoutingService) { }

  ngOnInit(): void {
  }

}
