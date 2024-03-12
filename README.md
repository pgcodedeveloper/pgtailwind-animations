# TailwindCSS animation Plugin

This package includes tailwind animation that you can use in your application or website

```shell
    npm install @pgcode/tailwind-animations
```

## Basic Setup
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
- Start to use the tailwind properties in your web with HTML
    ```html	
        <div class="animate-fade-in"></div>
    ```
- Use with any Frameworks such as React.js
   ```javascript
        import React from 'react';
        export default funtion Home() {
            return (
                <div className="animate-fade-in animate-delay-100"></div>
           )
        }
   ```
## Available properties to add in your proyect
```
- animate-background-shine
- animate-fade-in
- animate-fade-out
- animate-slide-in-top
- animate-slide-in-bottom
- animate-slide-out-top
- animate-slide-out-bottom
- animate-zoom-in
- animate-zoom-out
- animate-rotate-90
- animate-rotate-180
- animate-rotate-360
- animate-flip-horizontal
- animate-flip-vertical
- animate-bounce
- animate-swing
- animate-wobble
- animate-pulse
- animate-shake
- animate-tada
- animate-jump
- animate-hang
- animate-roll-in
- animate-roll-out
- animate-float
- animate-sink
- animate-flash
- animate-jiggle
- animate-rubber-band
- animate-slide-in-left
- animate-slide-in-right
- animate-slide-out-left
- animate-slide-out-right
- animate-spin-clockwise
- animate-spin-counter-clockwise
- animate-flip-x
- animate-flip-y
- animate-blink
- animate-pop
- animate-expand-horizontally
- animate-contract-horizontally
- animate-expand-vertically
- animate-contract-vertically
- animate-fade-in-up
- animate-fade-in-down
- animate-fade-in-left
- animate-fade-in-right
- animate-fade-out-up
- animate-fade-out-down
- animate-fade-out-left
- animate-fade-out-right
- animate-sway
- animate-flip-in-x
- animate-flip-in-y
- animate-flip-out-x
- animate-flip-out-y
- animate-rotate-in
- animate-rotate-out
- animate-slide-rotate-in
- animate-slide-rotate-out
- animate-heartbeat
- animate-blurred-fade-in
- animate-horizontal-vibration
- animate-rotational-wave
- animate-skew
- animate-vertical-bounce
- animate-horizontal-bounce
- animate-tilt
- animate-squeeze
- animate-slide-up-fade
- animate-bounce-fade-in
- animate-swing-drop-in
- animate-pulse-fade-in
```
