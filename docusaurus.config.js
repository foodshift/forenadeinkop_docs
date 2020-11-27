module.exports = {
  title: "En handbok för matkooperativ",
  tagline:
    "Vilka olika sorters matkooperativ finns det? Hur är de organiserade? Hur startar man?! Handboken innehåller inspiration och vägledning.",
  url: "https://handbok.forenadeinkop.se",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo.svg",
  organizationName: "foodshift", // Usually your GitHub org/user name.
  projectName: "forenadeinkop_docs", // Usually your repo name.
  themeConfig: {
    hideableSidebar: true,
    sidebarCollapsible: false,
    navbar: {
      title: "En handbok för matkooperativ",
      logo: {
        alt: "Förenade Inköp",
        src: "img/logo.svg",
      },
      items: [
        {
          href: "https://foodshift.se/c/forenade-inkop/32",
          label: "Forum",
          position: "left",
        },
        {
          href:
            "https://www.youtube.com/playlist?list=PLO7AcO89Czf6ErbDmOYtGfVI1ELgFwvTP",
          label: "Video",
          position: "left",
        },
        {
          href: "https://forenadeinkop.se/blogg",
          label: "Blogg",
          position: "left",
        },
        {
          href: "https://forenadeinkop.se/karta",
          label: "Karta",
          position: "left",
        },
      ],
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "handbok",
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/foodshift/forenadeinkop_docs/edit/master/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
