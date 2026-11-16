import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
    const frontendEnv = loadEnv(mode, ".", "");

    return {
        plugins: [react()],
        server: {
            proxy: {
                "/api": {
                    target: frontendEnv.BACKEND_URL || "http://localhost:3000",
                    changeOrigin: true,
                },
            },
        },
    };
});
