/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        fontFamily: {
            fira: ['Fira Code']
        },
        extend: {
            height: {
                'half-screen': '50vh'
            }
        }
    },
    plugins: []
}
