import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../../interface/message';
import { CurrentUserService } from '../../service/current-user.service';

@Component({
  selector: 'app-chat-bubble',
  templateUrl: './chat-bubble.component.html',
  styleUrls: ['./chat-bubble.component.css']
})
export class ChatBubbleComponent implements OnInit, Message {

  constructor(private currentUser: CurrentUserService) { }
  username!: string;
  msg!: string;
  sentAt!: string;

  ngOnInit(): void {
    this.username = this.currentUser.getUserName()
    // this.txt = this.currentMessage.getMessage()
  }

}
