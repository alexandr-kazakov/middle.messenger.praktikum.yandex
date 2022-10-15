import Block from '../../utils/Block';
import { Input } from '../../components/Input';
import template from './chat-main.pug';

interface ChatMainProps {
  chatData: Record<string, any>,
}

export class ChatMain extends Block {
  constructor(props: ChatMainProps) {
    super({
      ...props,
    });
  }

  init() {

    this.children.input = new Input({
      type: 'text',
      name: 'search',
      placeholder: 'Сообщение',
      title: "Сообщение",
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


