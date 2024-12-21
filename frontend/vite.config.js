// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
// 	plugins: [react()],
// 	server: {
// 		port: 3000,
// 		// Get rid of the CORS error
// 		proxy: {
// 			"/api": {
// 				target: "http://localhost:5000",
// 				changeOrigin: true,
// 				secure: false,
// 			},
// 		},
// 	},
// });


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Frontend will run on localhost:3000
    proxy: {
      // Proxy API requests to the backend
      "/api": {
        target: "http://localhost:5000", // Backend server
        changeOrigin: true, // Ensures the Origin header is modified to the target
        secure: false, // Disable SSL verification for local dev
      },
    },
  },
});
