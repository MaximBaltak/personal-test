<template>
  <div class="form">
    <div class="content">
      <h2>Персональные данные</h2>
      <p class="error" v-if="state.isError">Не все поля заполнены</p>
      <div style="width: inherit">
        <InputText title="Имя" id="name-input" width="100%" v-model="state.name"/>
        <InputText title="Возраст" id="name-input" width="100%" v-model="state.age"/>
      </div>
      <div class="action">
        <p>Дети (макс. 5)</p>
        <AddedButton v-if="state.children.length < 5" :click="addChildren" text="Добавить ребёнка"/>
      </div>
      <div v-if="state.children.length">
        <ChildeFormComponent
            v-for="formChildren in state.children"
            :key="formChildren.id"
            :form-children="formChildren"
            @updateName="updateChildrenName"
            @updateAge="updateChildrenAge"
            @remove="removeChildren"/>
      </div>
      <SubmitButton :click="save" text="Сохранить"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import InputText from "@/ui/InputText.vue";
import {reactive} from "vue";
import SubmitButton from "@/ui/SubmitButton.vue";
import AddedButton from "@/ui/AddedButton.vue";
import ChildeFormComponent from "@/components/ChildeFormComponent.vue";
import {StateFormUser} from "@/types/state-form-user";
import {UserService} from "@/services/User";
import {useRouter} from "vue-router";
import {ChildrenService} from "@/services/Children";

const router = useRouter()
const state = reactive<StateFormUser>({
  id: Math.floor(Math.random() * 10000),
  name: '',
  age: '',
  children: [],
  isError: false
})
const save = () => {
  UserService.save(state, router)
}
const removeChildren = (id: number) => {
  ChildrenService.remove(state, id)
}
const addChildren = () => {
  ChildrenService.add(state)
}
const updateChildrenName = (value: string, id: number) => {
  ChildrenService.updateName(state, value, id)
}
const updateChildrenAge = (value: string, id: number) => {
  ChildrenService.updateAge(state, value, id)
}
</script>

<style scoped lang="scss">
.form {
  width: 616px;
  @media screen and (max-width: 661px) {
    width: 90%;
    max-width: none;
  }
}

.content {
  display: flex;
  flex-flow: column;
  gap: 20px;
}

h2 {
  margin: 30px 0 0;
  color: #111;
  font-size: 16px;
  font-weight: 500;
}

.action {
  display: flex;
  justify-content: space-between;
  justify-items: center;
  width: 100%;
  @media screen and (max-width: 600px) {
    flex-flow: column;
  }

  p {
    color: #111111;
    font-size: 16px;
    font-weight: 500;
  }
}

.error {
  color: red;
  font-size: 16px;
  font-weight: 500;
}
</style>
