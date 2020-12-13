import './assets/styles/_global.scss'
import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    title: 'COVID-19 Dashboard'
  }
});

export default app;