

import Block from '../../utils/Block';
import template from './chat.pug';
import { ChatMain } from '../../components/chatMain';
import { Button } from '../../components/Button';

interface ChatPageProps {
  events: {
    //  submit: () => void;
  };
}

export class ChatPage extends Block {
  constructor(props: ChatPageProps) {
    super(props);
  }

  init() {
    this.children.chatSidebar = new ChatSidebar({
      chatsList: [
        { ownerName: 'Андрей', lastMessagePreview: "Изображение", time: "10:49", unreadMessageCounter: "2", ownerPicture: "https://via.placeholder.com/100/84cf6a/ffffff" },
        { ownerName: 'Вася', lastMessagePreview: "Привет! Предлагаю...", time: "12:49", unreadMessageCounter: "1", ownerPicture: "https://via.placeholder.com/100/16c0b0/ffffff", messages: [{ time: "12:49", data: "Привет! Предлагаю заработок в интернете, специальных знаний не требуется. Просто нажимаешь на кнопку Бабло и получаешь от $4000 в день." }] }
      ]
    });
    this.children.ChatMain = new ChatMain({
      chatData: { ownerName: 'Вася', lastMessagePreview: "Привет! Предлагаю...", time: "12:49", unreadMessageCounter: "1", ownerPicture: "https://via.placeholder.com/100/16c0b0/ffffff", messages: [{ time: "12:49", data: "Привет! Предлагаю заработок в интернете, специальных знаний не требуется. Просто нажимаешь на кнопку Бабло и получаешь от $4000 в день." }] }
    });

    this.children.ChatMain = new ChatMain({
      chatData: { ownerName: 'Вася', lastMessagePreview: "Привет! Предлагаю...", time: "12:49", unreadMessageCounter: "1", ownerPicture: "https://via.placeholder.com/100/16c0b0/ffffff", messages: [{ time: "12:49", data: "Привет! Предлагаю заработок в интернете, специальных знаний не требуется. Просто нажимаешь на кнопку Бабло и получаешь от $4000 в день." }] }
    });
    // this.children.inputName = new chatMain({});
  }

  render() {
    return this.compile(template, this.props);
  }
}
