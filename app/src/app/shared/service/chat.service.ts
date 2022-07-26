import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { io } from 'socket.io-client';
import { Message } from '../interface/message';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  public message$: BehaviorSubject<object> = new BehaviorSubject({});
  constructor() {}

  socket = io('http://localhost:3000');

  public sendMessage(message: string, username: string) {
    this.socket.emit('message', {msg: message, usr: username});
  }

  public getNewMessage = () => {
    this.socket.on('message', (message: Message) =>{
      this.message$.next(message);
    });
    return this.message$.asObservable();
  };
}