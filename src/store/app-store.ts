import {defineStore} from "pinia";
import {AppStore} from "@/types/app-store";
import {User} from "@/types/user";

export const useAppStore = defineStore('app', {
    state: (): AppStore => {
        return {
            users: []
        }
    },
    actions: {
        addUser(user: User) {
            this.users.push(user)
        }
    }
})
