# how to create project
## vite + react
```
pnpm create vite elden-weapons --template react-ts
```

## tailwind
```
pnpm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

index.cssを編集
```src/index.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

tailwind.config.jsを編集
```tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## vitest
```
pnpm add -D vitest
```

package.jsonにscriptsを追記
```package.json
 "test":"vitest",
```

## vitest + React Testing Library
```
pnpm add -D jsdom
```

vite.config.ts を編集
```
// Vitestの型を追加する
/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    // デフォルトのnode環境ではDOMを再現できない
    environment: "jsdom",
  },
})
```

```
pnpm add -D @testing-library/react @testing-library/jest-dom @testing-library/user-event
```
