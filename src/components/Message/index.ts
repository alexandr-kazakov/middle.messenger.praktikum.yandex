import Block from '../../utils/Block';
import template from './message.pug';


interface MessageProps {
  content: string;
  isMine: boolean;
}

export class Message extends Block {
  constructor(props: MessageProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
