const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: "./indexedDB.html",
                new: "./form.html",
                view: "./list.html",
                edit: "./singleFiche.html"
            }
        }
    }
})