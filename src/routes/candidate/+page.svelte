<script lang="ts">
	import { writableUser, type User } from '$lib/store';
	import Nav from '../../components/nav.svelte';

	let currentUser: User = { nome: '', telefone: '', email: '' };

	const unsubscribe = writableUser.subscribe((value) => {
		currentUser = value;
	});
</script>

<div
	class="
     flex flex-col relative max-w-[100vw] w-full min-h-[100vh] overflow-hidden justify-center items-center"
>
	<Nav />

	<button
		on:click={() => console.log(currentUser)}
		type="submit"
		class="flex rounded-full mt-2 font-semibold text-white py-2 px-6 w-full items-center justify-center bg-lesser-500 hover:bg-lesser-600 transition-colors"
	>
		consolelog
	</button>
</div>
