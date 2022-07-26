import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from 'src/app/shared/service/current-user.service';
import { SilentRoutingService } from 'src/app/shared/service/silent-routing.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName!: string

  constructor(
    private currentUser: CurrentUserService,
    private silentRouting: SilentRoutingService
  ) { }

  ngOnInit(): void {
  }

  getUserName(): void {
    this.userName = (document.getElementById("floatingInput") as HTMLInputElement).value
    
    if (this.userName != '') {
      this.currentUser.setUserName(this.userName)
      this.silentRouting.navigate('chat')
    }
  }

}
