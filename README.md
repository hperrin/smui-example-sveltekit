# SMUI SvelteKit Example

An example project implementing [Svelte Material UI](https://github.com/hperrin/svelte-material-ui) with [SvelteKit](https://kit.svelte.dev/).

# Get it Running

1. Clone the repo.
2. `npm install`
3. `npm run dev`
4. http://localhost:3000

There is a workaround that runs to prepare @material packages for Vite. Without the workaround, you will see this issue.

```
ENOENT: no such file or directory, open '.../smui-example-sveltekit/node_modules/@material/ripple/index.ts'
```

See: https://github.com/vitejs/vite/issues/2892

# License

Copyright 2021 Hunter Perrin

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
