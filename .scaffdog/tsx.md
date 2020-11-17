---
name: 'tsx component'
description: 'Component scaffolding...'
message: 'Please enter component name.'
root: './src/components'
output: '**/*'
ignore: []
---

# `{{ input }}/index.tsx`

```markdown
import { defineComponent } from 'vue';

export const {{ input }} = defineComponent({
  name: '{{ input }}',
  render() {
    return <p>{{ input }}</p>;
  }
});

```