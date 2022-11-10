import Block from '../../utils/Block';
import { Input } from '../../components/Input';
import template from './chat-sidebar.pug';
import { Chat } from '../Chat';
import { withStore } from '../../utils/Store';
import { ChatInfo } from '../../api/ChatsAPI';
import ChatsController from '../../controllers/ChatsController';
import { Link } from '../Link';

// @ts-ignore
const chats = [
  {
    id: 1,
    title: 'Chat 1',
    unread_count: 2,
  },
  {
    id: 1,
    title: 'Chat 2',
    unread_count: 0,
  },
  {
    id: 1,
    title: 'Chat 3',
    unread_count: 0,
  }
]

interface ChatSidebarProps {
  chats: ChatInfo[];
  isLoaded: boolean;
}

export class ChatSidebarBase extends Block {
  constructor(props: ChatSidebarProps) {
    super({
      ...props,
    });
  }

  protected init() {
    this.children.chats = this.createChats(this.props);
    // @ts-ignore
    this.children.profileLink = new Link({ to: '/profile', label: 'Профиль >', classes: "link_sidebar" });


    this.children.input = new Input({
      type: 'text',
      name: 'search',
      placeholder: 'Поиск',
      title: "Поиск",
      mainClasses: "gray-theme input_margin-b-md",
      events: {
        blur: () => {
          console.log('blur')
        }
      },
    });


  }

  navigate(to: string) {
    this.props.router.go(to);
  }

  // @ts-ignore
  protected componentDidUpdate(oldProps: ChatSidebarProps, newProps: ChatSidebarProps): boolean {
    this.children.chats = this.createChats(newProps);

    return true;
  }

  private createChats(props: ChatSidebarProps) {
    const test = props.chats.map(data => {
      return new Chat({
        ...data,
        events: {
          click: () => {
            ChatsController.selectChat(data.id);
          }
        }
      });
    })

    return test
  }

  render() {
    return this.compile(template, this.props);
  }
}


const withChats = withStore((state) => ({ chats: [...(state.chats || [])] }));
// @ts-ignore
export const ChatSidebar = withChats(ChatSidebarBase);
