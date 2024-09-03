/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          1: '#FDFDFD',
          2: '#FAFAFA',
          3: '#F2F2F2',
          4: '#E9E9E9',
          5: '#E0E0E0',
          6: '#D3D3D3',
          7: '#C4C4C4',
          8: '#AFAFAF',
          9: '#404040',
          10: '#515151',
        },
        green: {
          1: '#FAFEFB',
          2: '#F4FBF7',
          3: '#E3F8EB',
          4: '#D1F2DE',
          5: '#BFEAD0',
          6: '#ABDEC0',
          7: '#91CDAB',
          8: '#6BB88E',
          9: '#1A6140',
          10: '#2D4B3A',
        },
        red: {
          1: '#FFFCFC',
          2: '#FFF7F4',
          3: '#FFEAE4',
          4: '#FFDED4',
          5: '#FFD1C2',
          6: '#FFC0AE',
          7: '#FFAA91',
          8: '#F98969',
          9: '#913F27',
          10: '#803017',
        },
        blue: {
          1: '#FAFCFF',
          2: '#F4FAFF',
          3: '#E8F1FF',
          4: '#DAEAFF',
          5: '#CDE2FF',
          6: '#BFDAFF',
          7: '#ADCEFF',
          8: '#8EBAFE',
          9: '#021639',
          10: '#172F54',
        },
        yellow: {
          1: '#FEFDFB',
          2: '#FCF9F3',
          3: '#F5F0E1',
          4: '#EFE6CF',
          5: '#E9DCBB',
          6: '#E2D1A4',
          7: '#D8C183',
          8: '#C9AA51',
          9: '#6B5401',
          10: '#5C4500',
        },
      },
      backgroundImage: {
        'pattern-1': "url('/assets/images/pattern-1.webp')",
        'pattern-2': "url('/assets/images/pattern-2.webp')",
        'img-1': "url('/assets/images/img-1.webp')",
        'img-2': "url('/assets/images/img-2.webp')",
        feature: "url('/assets/images/feature.webp')",
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      borderRadius: {
        '5xl': '40px',
      },
    },
  },
  plugins: [],
};
