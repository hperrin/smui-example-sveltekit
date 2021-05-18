import preprocess from 'svelte-preprocess';
import fs from 'fs';
const pkg = JSON.parse(fs.readFileSync(new URL('package.json', import.meta.url), 'utf8'));

/** @type {import('@sveltejs/kit').Config} */
const config = {
// Consult https://github.com/sveltejs/svelte-preprocess
// for more information about preprocessors
preprocess: preprocess(),

kit: {
// hydrate the <div id="svelte"> element in src/app.html
target: '#svelte',
vite: () => ({

ssr: {
        noExternal: Object.keys(pkg.dependencies || {}).filter((pkgName) =>
            pkgName.startsWith("@smui")
          ),
      }
})
}
};

export default config;
