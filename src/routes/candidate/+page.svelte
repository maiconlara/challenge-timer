<script lang="ts">
	import { writableUser, type User } from '$lib/store';
	import Nav from '../../components/nav.svelte';
	import Timer from '../../components/timer.svelte';

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
	<div class="flex flex-col items-center justify-center w-[350px] h-full gap-3">
		<p class="mb-4 text-2xl font-bold text-lesser-600">Dados Pessoais</p>
		<label class="input input-bordered flex w-full items-center gap-4 bg-white border-gray-400">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 16 16"
				fill="currentColor"
				class="w-4 h-4 opacity-70"
				><path
					d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"
				/></svg
			>

			<input
				disabled
				type="text"
				bind:value={$writableUser.nome}
				class="grow opacity-40 select-none"
				placeholder="Nome"
			/>
		</label>
		<label class="input input-bordered flex w-full items-center gap-4 bg-white border-gray-400">
			<svg
				aria-hidden="true"
				focusable="false"
				class="w-4 h-4 opacity-70"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 512 512"
				><path
					d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
				/></svg
			>

			<input
				disabled
				type="text"
				bind:value={$writableUser.telefone}
				class="grow opacity-40 select-none"
				placeholder="Telefone"
			/>
		</label>

		<label class="input input-bordered flex w-full items-center gap-4 bg-white border-gray-400">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 16 16"
				fill="currentColor"
				class="w-4 h-4 opacity-70"
				><path
					d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"
				/><path
					d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"
				/></svg
			>
			<input
				disabled
				type="text"
				bind:value={$writableUser.email}
				class="grow opacity-40 select-none"
				placeholder="Email"
			/>
		</label>
	</div>
</div>
