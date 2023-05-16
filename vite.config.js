import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        laravel({
            input: [
                "resources/css/app.css",
                "resources/js/app.js",
                "resources/js/pages/home.jsx",
                "resources/js/pages/article.jsx",
            ],
            refresh: true,
        }),
        react(),
    ],
    build: {
        rollupOptions: {
            // Specify the esbuild loader configuration to handle JSX files
            // Set the loader for '.jsx' files to 'jsx'
            // You can also include additional file extensions as needed
            loader: {
                ".js": "jsx",
                ".jsx": "jsx",
            },
        },
    },
});
