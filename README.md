# TailwindCSS animation Plugin

This package includes tailwind animation that you can use in your application or website

```shell
    npm install @pgcode/tailwind-animations
```

Basic Setup
- Add the plugin in the file `tailwind.config.js`
    ```javascript
        import animations from '@pgcode/tailwind-animations';
        /** @type {import('tailwindcss').Config} */
        export default {
            content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
            theme: {
                extend: {},
            },
            plugins: [animations]
        }
    ```
- Start to use the tailwind properties in your web
    ```javascript	
        <div class="animate-fade-in"></div>
    ```