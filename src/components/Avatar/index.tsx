import './index.scss';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Avatar',
  props: {
    name: {
      required: true,
      type: String
    }
  },
  render() {
    return (
      <div class="Avatar">
        <div class="Avatar__image" />
        <div class="Avatar__text">{this.name}</div>
      </div>
    );
  }
});
