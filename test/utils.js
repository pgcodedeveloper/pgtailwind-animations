import tailwindcss from 'tailwindcss';
import postcss from 'postcss';
import minify from '@csstools/postcss-minify';
import animationPlugin from '../src/index.js';

const TAILWINDCSS_BASE = '@tailwind utilities;';

export const generatePluginCss = async(options = {}) =>{
    const { inline = '', content = '' } = options;    

    return postcss([
        minify(),
        tailwindcss({
            plugins: [animationPlugin],
            content: [{raw: content}]
        }),
    ]).process(`${TAILWINDCSS_BASE} ${inline}`,{
        from: undefined
    }).then(result => result.css)
}