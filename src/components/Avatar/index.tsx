import './index.scss';
import { defineComponent } from 'vue';

export const Avatar = defineComponent({
  name: 'Avatar',
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
      <div class={this.size ? `Avatar -${this.size}` : 'Avatar'}>
        <div class="Avatar__image" />
        <div class="Avatar__text">{this.name}</div>
      </div>
    );
  }
});
