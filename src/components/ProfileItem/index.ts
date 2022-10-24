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
    const response = this.compile(template, this.props);
    console.log(939393939, JSON.stringify(response));
    return response;

  }
}




