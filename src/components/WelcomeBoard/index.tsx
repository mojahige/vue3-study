import { defineComponent } from 'vue';
import { UserAvatar } from '@/components/UserAvatar';

export const WelcomeBoard = defineComponent({
  name: 'WelcomeBoard',
  components: {
    UserAvatar
  },
  render() {
    return (
      <div class="WelcomeBoard">
        <UserAvatar name="mojahige" size="l" />
      </div>
    );
  }
});
