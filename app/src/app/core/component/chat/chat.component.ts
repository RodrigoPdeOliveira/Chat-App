import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/shared/interface/message';
import { ChatService } from 'src/app/shared/service/chat.service';
import { CurrentUserService } from 'src/app/shared/service/current-user.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  username!: string
  newMessage!: string
  messageList: Message[] = []

  constructor(private chatService: ChatService, private currentUser: CurrentUserService) { }

  ngOnInit(){
    this.username = this.currentUser.getUserName()

    this.chatService.getNewMessage().subscribe((message) => {
      this.messageList.push(message as Message);
    })
  }

  sendMessage() {
    this.chatService.sendMessage(this.newMessage, this.username);
    this.newMessage = '';
  }
}