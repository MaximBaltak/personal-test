import {Children} from "@/types/children";

export interface User {
    id: number,
    name: string
    age: number | string,
    children: Children[]
}
