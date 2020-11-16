import { defineComponent } from 'vue';
import Avatar from '@/components/Avatar';

export default defineComponent({
  name: 'Profile',
  setup() {
    return () => (
      <div>
        <Avatar name="Yu Nozato" />
      </div>
    );
  }
});
