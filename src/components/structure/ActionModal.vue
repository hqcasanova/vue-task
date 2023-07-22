<script setup lang="ts">
export type Props = {
  actionName?: string;
  actionType?: 'standard' | 'destructive';
};

export type Emits = {
  (e: 'cancel'): void;
  (e: 'ok'): void;
};

withDefaults(defineProps<Props>(), {
  actionName: 'Ok',
  actionType: 'standard',
});
defineEmits<Emits>();
</script>

<template>
  <teleport to="body">
    <div class="action-modal">
      <div class="action-modal__content">
        <button
          class="action-modal__close"
          type="button"
          @click="$emit('cancel')"
        >
          &times;
        </button>

        <h2 class="action-modal__title">
          <slot name="title"></slot>
        </h2>

        <div class="action-modal__body"><slot></slot></div>

        <slot name="actions">
          <div class="action-modal__actions actions">
            <button
              class="actions__cancel"
              type="button"
              @click="$emit('cancel')"
            >
              Cancel
            </button>
            <button
              :class="`actions__ok actions__ok--${actionType}`"
              type="button"
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

<style scoped lang="scss">
@import '@/scss/mixins.scss';

.action-modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  background: rgba($black, 0.4);

  &__content {
    position: relative;
    width: 90%;
    max-width: 600px;
    margin: auto;
    padding: 2em;
    background: $white;
    border-radius: 1.5em;
  }

  &__close {
    position: absolute;
    top: 0;
    right: 0.5em;
    @include button();
    padding: 0;
    font-size: 2.5em;
  }

  &__title {
    margin: 0.5em 0 1em;
  }

  &__body {
    margin: 2em 0;
    line-height: 1.5em;
  }

  .actions {
    display: flex;
    justify-content: flex-end;

    &__ok {
      &:first-letter {
        text-transform: uppercase;
      }

      &--standard {
        @include button($primary);
      }

      &--destructive {
        @include button($danger);
      }

      &--standard,
      &--destructive {
        margin-left: 1em;
        color: $white;
        font-weight: 700;
        border-radius: 0.7em;
      }
    }

    &__cancel {
      @include button($lightest-grey);
      color: $grey;
      border: 1px solid $lighter-grey;
      border-radius: 0.7em;
    }
  }
}
</style>
