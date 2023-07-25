<script setup lang="ts" generic="T">
type Props = {
  items: T[];
  itemKey: keyof T;
};
const props = defineProps<Props>();

const keyValue = (item: any) => item[props.itemKey];
</script>

<template>
  <ul class="item-list flex flex-col">
    <template v-if="items.length">
      <li
        v-for="item in items"
        :key="keyValue(item)"
      >
        <slot v-bind="item"></slot>
      </li>
    </template>

    <li
      v-else
      class="text-center"
    >
      <slot name="empty">No list items</slot>
    </li>
  </ul>
</template>
