<script setup lang="ts">
export type Props = {
  actionName?: string;
  actionType?: 'standard' | 'destructive';
  isDisabledAction?: boolean;
};

export type Emits = {
  (e: 'cancel'): void;
  (e: 'ok'): void;
};

withDefaults(defineProps<Props>(), {
  actionName: 'Ok',
  actionType: 'standard',
  isDisabledAction: false,
});
defineEmits<Emits>();
</script>

<template>
  <teleport to="body">
    <div class="fixed top-0 bottom-0 left-0 right-0 flex bg-black/40">
      <div class="relative w-[90%] max-w-[600px] m-auto p-8 bg-white rounded-3xl">
        <button
          class="app-btn absolute top-2 right-2 min-mobile-dims text-secondary-states text-4.5xl font-normal"
          type="button"
          @click="$emit('cancel')"
        >
          &times;
        </button>

        <h2 class="mt-3 mb-6 first-letter:uppercase">
          <slot name="title"></slot>
        </h2>
        <div class="my-8 leading-6"><slot></slot></div>

        <slot name="actions">
          <div class="flex justify-center 2xs:justify-end">
            <button
              class="app-button py-2 px-4 text-secondary-states font-normal leading-6 border border-lighter-grey rounded-xl bg-secondary-states"
              type="button"
              @click="$emit('cancel')"
            >
              Cancel
            </button>

            <button
              class="app-btn ml-4 py-2 px-4 text-white font-bold first-letter:uppercase leading-6 rounded-xl bg-primary-states"
              :class="{ 'bg-danger-states': actionType === 'destructive' }"
              type="button"
              :disabled="isDisabledAction"
              @click="$emit('ok')"
            >
              {{ actionName }}
            </button>
          </div>
        </slot>
      </div>
    </div>
  </teleport>
</template>
