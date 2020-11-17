import './index.scss';
import { defineComponent } from 'vue';

export const UserAvatar = defineComponent({
  name: 'UserAvatar',
  props: {
    name: {
      required: true,
      type: String
    },
    size: {
      type: String,
      default: ''
    }
  },
  render() {
    return (
      <div class={this.size ? `UserAvatar -${this.size}` : 'UserAvatar'}>
        <div class="UserAvatar__image" />
        <div class="UserAvatar__text">{this.name}</div>
      </div>
    );
  }
});
