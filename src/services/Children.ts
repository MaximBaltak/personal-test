import {StateFormUser} from "@/types/state-form-user";

export class ChildrenService {

    public static add(state:StateFormUser){
        if (state.children.length < 5) {
            const formChildren = {
                id: Math.floor(Math.random() * 10000),
                name: '',
                age: '',
            }
            state.children.push(formChildren)
        }
    }
    public static remove(state: StateFormUser,id: number){
        const i = state.children.findIndex((el) => id === el.id)
        state.children.splice(i, 1)
    }
    public static updateName(state: StateFormUser,name: string,id: number){
        const i = state.children.findIndex((el) => id === el.id)
        state.children[i].name = name
        state.isError = false
    }
    public static updateAge(state: StateFormUser,age: string,id: number){
        const i = state.children.findIndex((el) => id === el.id)
        state.children[i].age = age
        state.isError = false
    }
}
