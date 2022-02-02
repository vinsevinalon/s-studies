<script>
	let name = "John";
	let count = 0;

	function handleClick() {
		count += 1;
	}

	function handleInput(event) {
		name = event.target.value;
	}



</script>

<main>
	<h1>Hello {name}!</h1>
	<input bind:value={name}>

	<button on:click={() => count += 1}>Click me!</button>

</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>