import Block from '../../utils/Block';
import template from './btn-sidebar.pug';
// import { Link } from '../../components/Link';
import { withStore } from '../../utils/Store';


export class ButtonSidebarBase extends Block {
  constructor() {
    super({});
  }
  protected init() {
    // this.children.backToChatButton = new Link({ to: '/messenger', label: '', classes: "link_userprofile-sidebar" });
  }

  render() {
    return this.compile(template, this.props);
  }
}


const withChats = withStore((state) => ({ chats: [...(state.chats || [])] }));

export const ButtonSidebar = withChats(ButtonSidebarBase);
