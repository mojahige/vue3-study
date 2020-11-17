import { defineComponent } from 'vue';
import { Avatar } from '@/components/Avatar';

export default defineComponent({
  name: 'Home',
  components: {
    Avatar
  },
  render() {
    return <Avatar name="mojahige" size="l" />;
  }
});
