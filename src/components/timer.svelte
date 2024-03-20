<script lang="ts">
	import { writableTimer, isTimerRunning } from '$lib/store';

	let timerRunning = false;
	let successModalOpen = false;
	let minutes = 0;
	let seconds = 0;

	const unsubscribe = writableTimer.subscribe((value) => {
		minutes = value.minutes;
		seconds = value.seconds;
	});

	const subscribeTimerRunning = isTimerRunning.subscribe((value) => {
		timerRunning = value;
	});

	const handleTimerEnd = () => {
		isTimerRunning.set(false);
	};
	const handleSuccess = () => {
		successModalOpen = true;
	};
</script>

<dialog id="successModal" class="modal" class:modal-open={successModalOpen}>
	<div class="modal-box bg-white flex flex-col items-center">
		<form method="dialog">
			<button
				class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
				on:click={handleTimerEnd}>✕</button
			>
		</form>
		<h3 class="font-bold text-lg text-green-600">SUCESSO!</h3>
		<p class="py-4 text-lg">Desafio finalizado com sucesso!</p>
	</div>
	<form method="dialog" class="modal-backdrop">
		<button on:click={handleTimerEnd}>close</button>
	</form>
</dialog>

<div class="flex flex-col items-center justify-center gap-4">
	<span class="countdown font-mono text-6xl">
		<span style="--value:{minutes};"></span>:
		<span style="--value:{seconds};"></span>
	</span>
	<button
	data-testid="sent"
		on:click={handleSuccess}
		class="flex rounded-full mt-2 font-semibold text-white py-2 px-6 w-full items-center justify-center bg-lesser-500 hover:bg-lesser-600 transition-colors"
	>
		Enviar
	</button>
</div>
