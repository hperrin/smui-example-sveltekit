import node from '@sveltejs/adapter-node';
import { readFileSync } from 'fs';

const packageUrl = new URL('package.json', import.meta.url)
const pkg = JSON.parse(readFileSync(packageUrl, 'utf8'));

/** @type {import('@sveltejs/kit').Config} */
export default {
  kit: {
    // By default, `npm run build` will create a standard Node app.
    // You can create optimized builds for different platforms by
    // specifying a different adapter
    adapter: node(),

    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",

    vite: {
      ssr: {
        noExternal: Object.keys(pkg.dependencies || {}),
      },
    },
  },
};
