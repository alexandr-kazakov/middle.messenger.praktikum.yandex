

import Block from '../../utils/Block';
import template from './chat.pug';
import { ChatMain } from '../../components/chatMain';
import { ChatSidebar } from '../../components/chatSidebar';
import ChatsController from '../../controllers/ChatsController';


export class ChatPage extends Block {
  constructor() {
    super({});
  }

  protected init() {
    this.children.chatSidebar = new ChatSidebar({ isLoaded: false });

    this.children.ChatMain = new ChatMain({});

    ChatsController.fetchChats().finally(() => {
      (this.children.chatSidebar as Block).setProps({
        isLoaded: true
      })
    });
  }

  protected render() {
    return this.compile(template, this.props);
  }
}



