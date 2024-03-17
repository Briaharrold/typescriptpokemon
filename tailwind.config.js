/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'],
    theme: {
      extend: {
        fontFamily: {
          "kodchasan-reg": ["kodchasan-reg"],
          "kodchasan-medium": ["kodchasan-medium"],
          "kodchasan-semi": ["kodchasan-semi"],
          "kodchasan-bold": ["kodchasan-bold"],
        },
      },
    },
    plugins: [
      require('flowbite/plugin'),
    ],
  };
  