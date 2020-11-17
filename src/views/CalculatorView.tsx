import { defineComponent } from 'vue';
import { Calculator } from '@/components/Calculator';

export default defineComponent({
  name: 'CalculatorView',
  components: {
    Calculator
  },
  render() {
    return <Calculator />;
  }
});
