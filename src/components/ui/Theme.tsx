import { extendTheme } from '@chakra-ui/react';

// Colores basados en la página de Jorge Rivera Immigration Group
const colors = {
  brand: {
    primary: '#1f3e5a', // Azul oscuro de la barra de navegación
    secondary: '#ff7f1f', // Naranja del botón "Consulta"
    accent: '#4682B4', // Azul para áreas de práctica
    background: '#ffffff',
    text: '#333333',
  },
  blue: {
    50: '#e6f0f7',
    100: '#cce0ef',
    200: '#99c2df',
    300: '#66a3cf',
    400: '#3385bf',
    500: '#1f3e5a', // Primary brand color
    600: '#173249',
    700: '#0f2538',
    800: '#071927',
    900: '#020c13',
  },
  orange: {
    50: '#fff3e6',
    100: '#ffe8cc',
    200: '#ffd199',
    300: '#ffba66',
    400: '#ffa333',
    500: '#ff7f1f', // Secondary brand color
    600: '#cc5f00',
    700: '#994700',
    800: '#663000',
    900: '#331800',
  }
};

const fonts = {
  heading: 'system-ui, sans-serif',
  body: 'system-ui, sans-serif',
};

const theme = extendTheme({
  colors,
  fonts,
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'brand.text',
      },
    },
  },
  components: {
    Button: {
      variants: {
        primary: {
          bg: 'brand.primary',
          color: 'white',
          _hover: {
            bg: 'blue.700',
          },
        },
        secondary: {
          bg: 'brand.secondary',
          color: 'white',
          _hover: {
            bg: 'orange.600',
          },
        },
        outline: {
          borderColor: 'brand.primary',
          color: 'brand.primary',
          _hover: {
            bg: 'blue.50',
          },
        },
      },
      defaultProps: {
        variant: 'primary',
      },
    },
    Link: {
      baseStyle: {
        _hover: {
          textDecoration: 'none',
        },
      },
      variants: {
        nav: {
          fontWeight: 'medium',
          _hover: {
            color: 'brand.secondary',
          },
        },
        footer: {
          color: 'white',
          _hover: {
            color: 'orange.200',
          },
        },
      },
    },
  },
});

export default theme;