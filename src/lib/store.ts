import { writable } from 'svelte/store';


export interface User {
    nome: string;
    telefone: string;
    email: string;
}

export let writableUser = writable<User>({
nome: '',
telefone: '',
email: ''
});