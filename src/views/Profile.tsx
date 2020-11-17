import { defineComponent } from 'vue';
import { UserAvatar } from '@/components/UserAvatar';

export default defineComponent({
  name: 'Profile',
  render() {
    return (
      <div>
        <UserAvatar name="mojahige" />
      </div>
    );
  }
});
