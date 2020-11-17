import { defineComponent } from 'vue';
import Avatar from '@/components/Avatar';

export default defineComponent({
  name: 'Profile',
  render() {
    return (
      <div>
        <Avatar name="mojahige" />
      </div>
    );
  }
});
