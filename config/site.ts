export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + HeroUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Inicio",
      href: "/",
    },
    {
      label: "Sobre",
      href: "/docs",
    },
    {
      label: "Habilidades",
      href: "/pricing",
    },
    {
      label: "Projetos",
      href: "/blog",
    },
  ],
  navMenuItems: [
        {
      label: "Inicio",
      href: "/",
    },
    {
      label: "Sobre",
      href: "/docs",
    },
    {
      label: "Habilidades",
      href: "/pricing",
    },
    {
      label: "Projetos",
      href: "/blog",
    },
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
