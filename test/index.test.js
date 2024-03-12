import { generatePluginCss } from "./utils";
import { describe, it, expect } from 'vitest';

describe('generatePluginCss', () =>{
    it('use a predefined animation',async() =>{
        const css = await generatePluginCss({
            content: '<div class="animate-zoom-in">Hello</div>'
        })
        console.log(css)
        expect(css).toMatch('@keyframes zoom-in{0%{opacity:0;transform:scale(.5)}100%{opacity:1;transform:scale(1)}}.animate-zoom-in{animation:zoom-in 0.6s ease-out}')
    })

    it('use a predefined animation delay',async() =>{
        const css = await generatePluginCss({
            content: '<div class="animate-delay-100">Hello</div>'
        })
        console.log(css)
        expect(css).toMatch('.animate-delay-100{animation-delay:100ms}')
    })
    it('use a custom animation delay',async() =>{
        const css = await generatePluginCss({
            content: '<div class="animate-delay-[555ms]">Hello</div>'
        })
        console.log(css)
        expect(css).toMatch('.animate-delay-\\[555ms\\]{animation-delay:555ms}')
    })

    it('use a predefined animation duration',async() =>{
        const css = await generatePluginCss({
            content: '<div class="animate-duration-100">Hello</div>'
        })
        console.log(css)
        expect(css).toMatch('.animate-duration-100{animation-duration:100ms}')
    })
    it('use a predefined names animation duration',async() =>{
        const css = await generatePluginCss({
            content: '<div class="animate-duration-faster">Hello</div>'
        })
        console.log(css)
        expect(css).toMatch('.animate-duration-faster{animation-duration:100ms}')
    })
    it('use a custom animation duration',async() =>{
        const css = await generatePluginCss({
            content: '<div class="animate-duration-[555ms]">Hello</div>'
        })
        console.log(css)
        expect(css).toMatch('.animate-duration-\\[555ms\\]{animation-duration:555ms}')
    })

    it('use a timing function animation',async() =>{
        const css = await generatePluginCss({
            content: '<div class="animate-linear">Hello</div>'
        })
        console.log(css)
        expect(css).toMatch('.animate-linear{animation-timing-function:linear}')
    })
})
