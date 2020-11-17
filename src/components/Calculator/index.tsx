import './index.scss';
import { defineComponent } from 'vue';

const Button = defineComponent({
  props: {
    onClick: {
      type: Function,
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      default: () => {}
    }
  },
  emits: ['click'],
  setup(props, { emit }) {
    const emitClick = () => {
      emit('click', '🦖');
    };

    return { emitClick };
  },
  render() {
    return (
      <button class="Calculator__button" type="button" onClick={this.emitClick}>
        {this.$slots.default ? this.$slots.default() : 'hoge'}
      </button>
    );
  }
});

export const Calculator = defineComponent({
  name: 'Calculator',
  setup() {
    const handleClick = (value: string) => {
      console.log('onClick', value);
    };

    return {
      handleClick
    };
  },
  render() {
    return (
      <div class="Calculator">
        <div class="Calculator__row">
          <Button
            v-slots={{
              default: () => '1'
            }}
            onClick={this.handleClick}
          />
        </div>
      </div>
    );
  }
});
