<template>
  <div class="element">
    <div style="width: inherit; display: flex; gap: 40px" class="mobile-form">
      <InputText title="Имя" id="name-input" width="100%" v-model="name"/>
      <InputText title="Возраст" id="name-input" width="100%" v-model="age"/>
    </div>
    <button @click="remove" class="remove">Удалить</button>
  </div>
</template>

<script setup lang="ts">
import InputText from "@/ui/InputText.vue";
import {computed, defineProps, defineEmits} from "vue";
import {Children} from "@/types/children";

const props = defineProps<{
  formChildren: Children
}>()
const emit = defineEmits<{
  (e: 'updateName', value: string, id: number): void
  (e: 'updateAge', value: string, id: number): void
  (e: 'remove', id: number): void
}>()
const name = computed({
  get() {
    return props.formChildren.name
  },
  set(value: string) {
    emit('updateName', value, props.formChildren.id)
  }
})
const age = computed({
  get() {
    return props.formChildren.age.toString()
  },
  set(value: string) {
    emit('updateAge', value, props.formChildren.id)
  }
})
const remove = () => {
  emit('remove', props.formChildren.id)
}
</script>

<style scoped lang="scss">
.element {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 35px;
  @media screen and (max-width: 600px) {
    flex-flow: column;
  }
}

.mobile-form {
  @media screen and (max-width: 600px) {
    flex-flow: column;
  }
}

.remove {
  outline: none;
  border: none;
  display: block;
  color: #01A7FD;
  font-weight: 400;
  font-size: 14px;
  cursor: pointer;
  background: none;
}
</style>
