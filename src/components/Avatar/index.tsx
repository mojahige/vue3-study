import styles from './index.module.scss';
import { defineComponent } from 'vue';

console.log(styles);

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
        <div class={`${styles.Avatar__text} ${styles._red}`}>{this.name}</div>
      </div>
    );
  }
});
