const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: "./index.html",
                new: "./pages/form.html",
                view: "./pages/list.html",
                edit: "./singleFiche.html"
            }
        }
    }
})