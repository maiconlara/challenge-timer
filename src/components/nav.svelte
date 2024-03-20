<script lang="ts">
	import { writableUser, type User } from '$lib/store';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	let currentUser: User = { nome: '', telefone: '', email: '' };

	const unsubscribe = writableUser.subscribe((value) => {
		currentUser = value;
	});

	let currentPath = $page.route.id;
	let handleNavigate = () => {
		if (!currentUser.nome || !currentUser.telefone || !currentUser.email) {
			errorModal.showModal();
			return;
		}
		if (currentPath === '/') {
			goto(`/candidate`, { replaceState: false });
		} else if (currentPath === '/candidate') {
			goto(`/`, { replaceState: false });
		}
	};
</script>

<div
	class="flex max-w-full max-h-[100px] min-h-[100px] shadow w-full h-full absolute top-0 left-0 justify-between px-28 items-center transition-colors overflow-hidden"
>
	<div class="flex flex-row h-full items-center justify-center gap-12">
		<p class="uppercase text-2xl font-bold select-none">Lesser</p>
	</div>
	<button
		on:click={handleNavigate}
		class="hidden lg:flex rounded-full font-semibold text-white py-2 px-6 bg-lesser-500 hover:bg-lesser-600 transition-colors"
	>
		{currentPath == '/' ? 'Candidate' : 'Home'}
	</button>
</div>
