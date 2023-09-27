import {StateFormUser} from "@/types/state-form-user";
import {useAppStore} from "@/store/app-store";
import {User} from "@/types/user";
import {Router} from "vue-router";

export class UserService {

    public static save(state: StateFormUser, router: Router) {
        const appStore = useAppStore()
        for (let i = 0; i < state.children.length; i++) {
            if (!state.children[i].name || !state.children[i].age) {
                state.isError = true
                return
            }
        }

        if (state.name && state.age) {
            const user: User = {
                id: state.id,
                name: state.name,
                age: Number(state.age) ? state.age : 0,
                children: [...state.children]
            }
            user.children.forEach(el => {
                el.age = Number(el.age) ? el.age : 0
            })
            appStore.addUser(user)
            router.push({name: 'preview'})
        } else {
            state.isError = true
        }
    }
}

