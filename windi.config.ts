import { defineConfig } from 'windicss/helpers'

export default defineConfig({
    darkMode: "class",
    extract: {
        include: ['**/*.{jsx,tsx,css}'],
        exclude: ['node_modules', '.git', '.next'],
    },
    theme: {
        extend: {
            animation: {
                "wave": 'wave 1s ease infinite'
            },
            keyframes: {
                'wave': {
                    "0%,100%": {
                        height: "40px",
                        background: "lightgreen",
                    },
                    "50%": {
                        height: "65px",
                        background: "lightblue",
                    }
                }
            }
        }
    }
})