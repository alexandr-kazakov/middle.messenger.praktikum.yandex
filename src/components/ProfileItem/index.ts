import Block from '../../utils/Block';
import template from './profileItem.pug';

interface ProfileItemProps {
  name: string;
  value: string | number;
}

export class ProfileItem extends Block {
  constructor(props: ProfileItemProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}




