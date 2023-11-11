import { defaultTheme } from "@vuepress/theme-default";

export default {
  base: "/CTF-problems/",
  title: "test",
  theme: defaultTheme({
    // 在这里进行配置
    navbar: [
      { text: "2020", link: "/2020/" },
      { text: "2021", link: "/2021/" },
    ],
    sidebar: [
      {
        text: "test1",
        // link: "test1/",
        collapsible: true,
        children: [
          { text: "1", link: "/test1/1.md" },
          { text: "2", link: "/test1/2.md" },
        ],
      },
      {
        text: "nullcon HackIM CTF",
        collapsible: true,
        children: [
          { text: "reguest", link: "/nullcon HackIM CTF/reguest.md" },
          { text: "zpr", link: "/nullcon HackIM CTF/zpr.md" },
        ],
      },
    ],
  }),
};
