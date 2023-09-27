import {Children} from "@/types/children";

export interface StateFormUser {
    id: number,
    name: string,
    age: string,
    children: Children[],
    isError: boolean
}
