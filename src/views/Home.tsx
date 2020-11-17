import { defineComponent } from 'vue';
import { WelcomeBoard } from '@/components/WelcomeBoard';

export default defineComponent({
  name: 'Home',
  components: {
    WelcomeBoard
  },
  render() {
    return <WelcomeBoard />;
  }
});
