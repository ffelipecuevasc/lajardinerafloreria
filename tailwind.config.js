/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./static/js/**/*.js"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Mapeo dinámico a variables CSS
        "primary": "rgb(var(--color-primary) / <alpha-value>)",
        "background": "rgb(var(--color-background) / <alpha-value>)",
        "on-background": "rgb(var(--color-on-background) / <alpha-value>)",
        "surface-variant": "rgb(var(--color-surface-variant) / <alpha-value>)",
        "on-surface-variant": "rgb(var(--color-on-surface-variant) / <alpha-value>)",
        "surface-container-low": "rgb(var(--color-surface-container-low) / <alpha-value>)",
        "surface-container-lowest": "rgb(var(--color-surface-container-lowest) / <alpha-value>)",
        "primary-container": "rgb(var(--color-primary-container) / <alpha-value>)",

        // Colores de estado (opcional mantener fijos o variables)
        "error": "#ba1a1a",
        "surface-bright": "#fff8f6",
        "outline": "#8b7266",
        "outline-variant": "#dec0b3",
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "container-max": "1280px",
        "section-gap": "120px",
        "unit": "8px",
        "margin": "40px",
        "gutter": "24px"
      },
      fontFamily: {
        "display-lg": ["Fraunces", "serif"],
        "headline-md": ["Fraunces", "serif"],
        "body-md": ["Montserrat", "sans-serif"],
        "label-sm": ["Montserrat", "sans-serif"],
        "label-lg": ["Montserrat", "sans-serif"],
        "headline-lg": ["Fraunces", "serif"],
        "body-lg": ["Montserrat", "sans-serif"],
        "display-md": ["Fraunces", "serif"]
      },
      fontSize: {
        "display-lg": ["64px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "400"}],
        "headline-md": ["24px", {"lineHeight": "1.4", "fontWeight": "500"}],
        "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
        "label-sm": ["12px", {"lineHeight": "1.2", "letterSpacing": "0.03em", "fontWeight": "500"}],
        "label-lg": ["14px", {"lineHeight": "1.2", "letterSpacing": "0.05em", "fontWeight": "600"}],
        "headline-lg": ["32px", {"lineHeight": "1.3", "fontWeight": "500"}],
        "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
        "display-md": ["48px", {"lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "400"}]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}