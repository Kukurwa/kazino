/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}",
            "./src/components/**/*.{jsx}"],
  theme: {
    extend: {
    },
    screens: {
      'x': {'max': '1340px'},
      'xl': {'max': '1245px'},
      'xs': {'max': '860px'},
      'slider': {'max': '760px'},
      'xss': {'max': '670px'},
      'xms': {'max': '560px'},
      'xm': {'max': '500px'},
      'm': {'max': '470px'},
      'low': {'max': '440px'},
    },
    fontSize: {
      'xl': ['18px', {
        'lineHeight': '22.3px',
        'fontWeight': '700'
      }],
      'xs': ['15px', {
        'lineHeight': '22.3px',
        'fontWeight': '700'
      }],
      'xss': ['13px', {
        'lineHeight': '22.3px',
        'fontWeight': '700'
      }],
      'low': ['11px', {
        'lineHeight': '22.3px',
        'fontWeight': '700'
      }],
      'xlh': ['50px', {
        'lineHeight': '22.3px',
        'fontWeight': '700'
      }],
      'xsh': ['40px', {
        'lineHeight': '22.3px',
        'fontWeight': '700'
      }],
      'xssh': ['23px', {
        'lineHeight': '22.3px',
        'fontWeight': '700'
      }],
    },
  },
  plugins: [
    require('tailwindcss-rtl'),
  ],
}

