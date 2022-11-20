module.exports = {
    content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
    important: true,
    theme: {
        extend: {
            colors: {
                gray: {
                    gray600: '#374051',
                    gray400: '#657282',
                },
                border: {
                    border400: '#D9DDE0',
                    borderSide: '#D9DDE0',
                    borderDropMenu: '#63ACFE',
                },
                black: {
                    headerText: '#152536',
                    pText: '#828D99',
                    cardHeader: '#1A1C24',
                    cardLang: '#48566A',
                },
            },
            border: {
                border400: '#D9DDE0',
                right: '#D9DDE0',
            },
            black: {
                headerText: '#152536',
                pText: '#828D99',
                cardHeader: '#1A1C24',
            },
            language: {
                langBg: '#F6F7F8',
                border: '#D9DDE0',
                text: '#48566A',
            },
            maxWidth: {
                cardMaxWidth: '195px',
            },
        },
    },
    plugins: [],
};
