<template>
  <div>
    <Affix><Button>固定120px</Button></Affix>
  </div>
</template>

<script lang="ts">
import { Affix, Button } from 'thoughts-ui';
import { ref } from 'vue';

export default {
  components: {
    Affix,
    Button,
  },
  setup() {
    const count = ref(0);
    function onClick() {
      count.value++;
    }

    return {
      count,
      onClick,
    };
  },
};
</script>
