import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'

export default defineConfig({
    plugins: [
        laravel([
            'resources/js/first.js',
            'resources/js/second.js',
        ]),
    ],
})
