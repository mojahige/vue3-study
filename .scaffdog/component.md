---
name: 'component'
description: 'Component scaffolding...'
message: 'Please enter component name.'
root: './src'
output: '**/*'
ignore: []
---

# `{{ input }}.vue`

```markdown
<template>
  <p>{{ input }}</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: '{{ input }}'
});
</script>

<style scoped lang="scss">
.{{ input }} {
  @at-root {
    & {
      // do something
    }
  }
}
</style>

```