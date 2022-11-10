import Block from '../../utils/Block';
import { Input } from '../../components/Input';
import { Button } from '../Button';
import template from './chat-main.pug';
import { Message } from '../Message';
import MessagesController, { Message as MessageInfo } from '../../controllers/MessagesController';
import { withStore } from '../../utils/Store';

interface ChatMainProps {
  selectedChat: number | undefined;
  messages: MessageInfo[];
  userId: number;
}

export class ChatMainBase extends Block {
  constructor(props: ChatMainProps) {
    super({
      ...props,
    });
  }

  init() {
    this.children.button = new Button({
      mode: 'btn',
      type: "button",
      text: "Отправить",
      mainClasses: "btn_theme-primary btn_full-width btn_margin-b-xs",
      events: {
        click: () => {
          const input = this.children.input as Input;
          const message = input.getValue();

          input.setValue('');

          MessagesController.sendMessage(this.props.selectedChat!, message);
        }
      }
    });

    this.children.messages = this.createMessages(this.props);

    this.children.input = new Input({
      type: 'text',
      name: 'search',
      placeholder: 'Сообщение',
      title: "Сообщение",
      mainClasses: "gray-theme input_margin-b-sm",
      events: {
        blur: () => {
          console.log('blur')
        }
      },
    });
  }


  // @ts-ignore
  protected componentDidUpdate(oldProps: ChatMainProps, newProps: ChatMainProps): boolean {
    this.children.messages = this.createMessages(newProps);

    return true;
  }

  private createMessages(props: ChatMainProps) {
    return props.messages.map(data => {
      return new Message({ ...data, isMine: props.userId === data.user_id });
    })



  }

  render() {
    return this.compile(template, this.props);
  }
}

const withSelectedChatMessages = withStore(state => {
  const selectedChatId = state.selectedChat;

  if (!selectedChatId) {
    return {
      messages: [],
      selectedChat: undefined,
      userId: state.user.id
    };
  }

  return {
    messages: (state.messages || {})[selectedChatId] || [],
    selectedChat: state.selectedChat,
    userId: state.user.id
  };
});

// @ts-ignore
export const ChatMain = withSelectedChatMessages(ChatMainBase);







