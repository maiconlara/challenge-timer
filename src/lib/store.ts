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

export interface Timer {
	minutes: number;
	seconds: number;
}

export let writableTimer = writable<Timer>({
	minutes: 0,
	seconds: 0
});

export let isTimerRunning = writable<boolean>();
export let timerError = writable<boolean>(false);
