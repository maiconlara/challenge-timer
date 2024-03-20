<script lang="ts">
	import { writableUser, type User } from '$lib/store';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	let currentUser: User = { nome: '', telefone: '', email: '' };
	let isModalOpen = false;
	const unsubscribe = writableUser.subscribe((value) => {
		currentUser = value;
	});

	let currentPath = $page.route.id;
	let handleNavigate = () => {
		if (!currentUser.nome || !currentUser.telefone || !currentUser.email) {
			isModalOpen = true;
			return;
		}
		if (currentPath === '/') {
			goto(`/candidate`, { replaceState: false });
		} else if (currentPath === '/candidate') {
			goto(`/`, { replaceState: false });
		}
	};
</script>

<dialog id="errorModal" class="modal" class:modal-open={isModalOpen}>
	<div class="modal-box bg-white flex flex-col items-center">
		<form method="dialog">
			<button
				class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
				on:click={() => (isModalOpen = false)}>✕</button
			>
		</form>
		<h3 class="font-bold text-lg text-red-500">ERRO!</h3>
		<p class="py-4 text-lg">Preencha todos os dados antes de continuar!</p>
	</div>
	<form method="dialog" class="modal-backdrop">
		<button on:click={() => (isModalOpen = false)}>close</button>
	</form>
</dialog>

<div
	class="flex max-w-full max-h-[100px] min-h-[100px] shadow w-full h-full absolute top-0 left-0 justify-between px-28 items-center transition-colors overflow-hidden"
>
	<div class="flex flex-row h-full items-center justify-center gap-12">
		<p data-testid="logo" class="uppercase text-2xl font-bold select-none">Lesser</p>
	</div>
	<button
	data-testid="candidate"
		on:click={handleNavigate}
		class="flex rounded-full font-semibold text-white py-2 px-6 bg-lesser-500 hover:bg-lesser-600 transition-colors"
	>
		{currentPath == '/' ? 'Candidate' : 'Home'}
	</button>
</div>
