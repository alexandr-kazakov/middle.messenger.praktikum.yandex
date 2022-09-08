import Block from '../../utils/Block';
import { Input } from '../../components/Input';
import template from './chat-sidebar.pug';

interface ChatSidebarProps {
  chatsList: object[],
  events: {
    blur: (event: object) => void;
  };
}

export class ChatSidebar extends Block {
  constructor(props: ChatSidebarProps) {
    super({
      ...props,
    });
  }

  init() {
    this.children.input = new Input({
      type: 'text',
      name: 'search',
      placeholder: 'Поиск',
      title: "Поиск",
      mainClasses: "gray-theme",
      events: {
        blur: () => {
          console.log('blur')
        }
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
