import { REPOSITORY_URL } from '@/config';

const ROUTES = {
  HOME: {
    name: 'Home',
    es: "Inicio",
    en: "Home",
    path: '/'
  },
  DOCS: {
    name: 'Docs',
    es: "Docs",
    en: "Docs",
    path: '/docs/getting-started'
  },
  COMPONENTS: {
    name: 'Components',
    es: "Componentes",
    en: "Components",
    path: '/docs/components/icon'
  },
  DEFAULT_THEME: {
    name: 'Default theme',
    es: "Tema Principal",
    en: "Default theme",
    path: '/docs/default-theme'
  },
  SX_PROPS: {
    name: 'The sx props',
    es: "La sx prop",
    en: "The sx prop",
    path: '/docs/the-sx-prop'
  },
  PROVIDER: {
    name: 'Provider',
    es: "Proveedor",
    en: "Provider",
    path: '/docs/provider'
  },
  ABOUT: {
    name: 'About',
    es: "Acerca de",
    en: "About",
    path: '/about-us'
  },
  GITHUB: {
    name: 'Github',
    path: REPOSITORY_URL
  },
  DISCORD: {
    name: 'Discord',
    path: 'https://discord.gg/qaCWwA3r'
  },
};

export default ROUTES;
