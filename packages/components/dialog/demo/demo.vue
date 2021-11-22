<template>
  <div>
    <Dialog
      v-model="visible"
      @open="openDialog"
      @opened="openedDialog"
      width="30%"
      :title="title"
    >
      <span>This is a message</span>
      <template #footer>
        <span class="dialog-footer">
          <Button @click="visible = false">Cancel</Button>
          <Button type="primary" @click="visible = false">Confirm</Button>
        </span>
      </template>
    </Dialog>
    <Button @click="openDialog">打开弹窗</Button>
  </div>
</template>

<script lang="ts">
import { Button, Dialog } from 'thoughts-ui';
import { ref } from 'vue';

export default {
  components: {
    Button,
    Dialog,
  },
  setup() {
    const visible = ref(false);
    const title = ref('Tips');
    function openDialog() {
      visible.value = true;
    }
    const openedDialog = (): void => {
      console.log('弹窗opend');
    };
    return {
      title,
      visible,
      openDialog,
      openedDialog,
    };
  },
};
</script>
