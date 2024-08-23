/**
 * This is a minimal config.
 *
 * If you need the full config, get it from here:
 * https://unpkg.com/browse/tailwindcss@latest/stubs/defaultConfig.stub.js
 */
import type { Config } from "tailwindcss";

// Import plugins
import daisyui from "daisyui";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Kokoro", "sans-serif"]
      }
    }
  },
  plugins: [
    daisyui
  ],
  daisyui: {
    themes: [
      {
        kokoro: {
          primary: "#7569E1",
          secondary: "#03020C",
          accent: "#FFF7F8",
          neutral: "#1E2036",
          "base-100": "#070519",
          info: "#DCD9F7",
          success: "#6FCF97",
          warning: "#EDD68D",
          error: "#EB5757"
        }
      }
    ]
  }
} satisfies Config;
