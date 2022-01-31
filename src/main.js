import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world wide web'
	}
});

export default app;