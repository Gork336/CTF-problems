import { defaultTheme } from "@vuepress/theme-default";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";

export default {
  base: "/CTF-problems/",
  title: "CTF-problems",
  plugins: [
    docsearchPlugin({
      // 配置项
      apiKey: "d5a57c077d3ddd82c9bbfc83325e4545",
      indexName: "ctf-problems",
      appId: "QW26KV5IKT",
    }),
  ],
  theme: defaultTheme({
    home: "/",
    // 在这里进行配置
    sidebar: [
      {
        text: "首页",
        link: "/README.md",
      },
      {
        text: "2018",
        collapsible: true,
        children: [
          {
            text: "HCTF 2018",
            collapsible: true,
            children: [
              {
                text: "Warmup",
                link: "/2018/HCTF 2018/Warmup.md",
              },
            ],
          },
          {
            text: "NCTF 2018",
            collapsible: true,
            children: [
              {
                text: "签到题",
                link: "/2018/NCTF 2018/签到题.md",
              },
            ],
          },
        ],
      },
      {
        text: "2019",
        collapsible: true,
        children: [
          {
            text: "CISCN 2019华东南",
            collapsible: true,
            children: [
              {
                text: "Web11",
                link: "/2019/CISCN 2019华东南/Web11.md",
              },
            ],
          },
          {
            text: "CISCN 2019华北Day2",
            collapsible: true,
            children: [
              {
                text: "Web1",
                link: "/2019/CISCN 2019华北Day2/Web1.md",
              },
            ],
          },
          {
            text: "GXYCTF 2019",
            collapsible: true,
            children: [
              {
                text: "BabyUpload",
                link: "/2019/GXYCTF 2019/BabyUpload.md",
              },
              {
                text: "Ping Ping Ping",
                link: "/2019/GXYCTF 2019/Ping Ping Ping.md",
              },
            ],
          },
          {
            text: "suctf 2019",
            collapsible: true,
            children: [
              {
                text: "EasySQL",
                link: "/2019/suctf 2019/EasySQL.md",
              },
            ],
          },
          {
            text: "ZJCTF 2019",
            collapsible: true,
            children: [
              {
                text: "NiZhuanSiWei",
                link: "/2019/ZJCTF 2019/NiZhuanSiWei.md",
              },
            ],
          },
          {
            text: "强网杯 2019",
            collapsible: true,
            children: [
              {
                text: "随便注",
                link: "/2019/强网杯 2019/随便注.md",
              },
            ],
          },
        ],
      },
      {
        text: "2020",
        collapsible: true,
        children: [
          {
            text: "BJDCTF 2020",
            collapsible: true,
            children: [
              {
                text: "easy_md5",
                link: "/2020/BJDCTF 2020/easy_md5.md",
              },
            ],
          },
          {
            text: "WUSTCTF 2020",
            collapsible: true,
            children: [
              {
                text: "朴实无华",
                link: "/2020/WUSTCTF 2020/朴实无华.md",
              },
            ],
          },
          {
            text: "羊城杯 2020",
            collapsible: true,
            children: [
              {
                text: "easycon",
                link: "/2020/羊城杯 2020/easycon.md",
              },
            ],
          },
        ],
      },
      {
        text: "2021",
        collapsible: true,
        children: [
          {
            text: "GKCTF 2021",
            collapsible: true,
            children: [
              {
                text: "easycms",
                link: "/2021/GKCTF 2021/easycms.md",
              },
            ],
          },
          {
            text: "SWPUCTF 2021 新生赛",
            collapsible: true,
            children: [
              {
                text: "babyrce",
                link: "/2021/SWPUCTF 2021 新生赛/babyrce.md",
              },
              {
                text: "caidao",
                link: "/2021/SWPUCTF 2021 新生赛/caidao.md",
              },
              {
                text: "Do_you_know_http",
                link: "/2021/SWPUCTF 2021 新生赛/Do_you_know_http.md",
              },
              {
                text: "easyrce",
                link: "/2021/SWPUCTF 2021 新生赛/easyrce.md",
              },
              {
                text: "easyupload1.0",
                link: "/2021/SWPUCTF 2021 新生赛/easyupload1.0.md",
              },
              {
                text: "easyupload2.0",
                link: "/2021/SWPUCTF 2021 新生赛/easyupload2.0.md",
              },
              {
                text: "easyupload3.0",
                link: "/2021/SWPUCTF 2021 新生赛/easyupload3.0.md",
              },
              {
                text: "easy_md5",
                link: "/2021/SWPUCTF 2021 新生赛/easy_md5.md",
              },
              {
                text: "easy_sql",
                link: "/2021/SWPUCTF 2021 新生赛/easy_sql.md",
              },
              {
                text: "error",
                link: "/2021/SWPUCTF 2021 新生赛/error.md",
              },
              {
                text: "ez_unserialize",
                link: "/2021/SWPUCTF 2021 新生赛/ez_unserialize.md",
              },
              {
                text: "finalrce",
                link: "/2021/SWPUCTF 2021 新生赛/finalrce.md",
              },
              {
                text: "gift_F12",
                link: "/2021/SWPUCTF 2021 新生赛/gift_F12.md",
              },
              {
                text: "hardrce",
                link: "/2021/SWPUCTF 2021 新生赛/hardrce.md",
              },
              {
                text: "hardrce_3",
                link: "/2021/SWPUCTF 2021 新生赛/hardrce_3.md",
              },
              {
                text: "include",
                link: "/2021/SWPUCTF 2021 新生赛/include.md",
              },
              {
                text: "jicao",
                link: "/2021/SWPUCTF 2021 新生赛/jicao.md",
              },
              {
                text: "no_wakeup",
                link: "/2021/SWPUCTF 2021 新生赛/no_wakeup.md",
              },
              {
                text: "pop",
                link: "/2021/SWPUCTF 2021 新生赛/pop.md",
              },
              {
                text: "PseudoProtocols",
                link: "/2021/SWPUCTF 2021 新生赛/PseudoProtocols.md",
              },
              {
                text: "sql",
                link: "/2021/SWPUCTF 2021 新生赛/sql.md",
              },
            ],
          },
          {
            text: "天翼杯 2021",
            collapsible: true,
            children: [
              {
                text: "esay_eval",
                link: "/2021/天翼杯 2021/esay_eval.md",
              },
            ],
          },
          {
            text: "第五空间 2021",
            collapsible: true,
            children: [
              {
                text: "EasyCleanup",
                link: "/2021/第五空间 2021/EasyCleanup.md",
              },
              {
                text: "pklovecloud",
                link: "/2021/第五空间 2021/pklovecloud.md",
              },
              {
                text: "WebFTP",
                link: "/2021/第五空间 2021/WebFTP.md",
              },
              {
                text: "yet_another_mysql_injection",
                link: "/2021/第五空间 2021/yet_another_mysql_injection.md",
              },
            ],
          },
          {
            text: "鹤城杯 2021",
            collapsible: true,
            children: [
              {
                text: "EasyP",
                link: "/2021/鹤城杯 2021/EasyP.md",
              },
              {
                text: "Middle magic",
                link: "/2021/鹤城杯 2021/Middle magic.md",
              },
            ],
          },
        ],
      },
      {
        text: "2022",
        collapsible: true,
        children: [
          {
            text: "GKCTF 2020",
            collapsible: true,
            children: [
              {
                text: "cve版签到",
                link: "/2022/GKCTF 2020/cve版签到.md",
              },
            ],
          },
          {
            text: "HNCTF 2022 Week1",
            collapsible: true,
            children: [
              {
                text: "2048",
                link: "/2022/HNCTF 2022 Week1/2048.md",
              },
              {
                text: "easy_html",
                link: "/2022/HNCTF 2022 Week1/easy_html.md",
              },
              {
                text: "easy_upload",
                link: "/2022/HNCTF 2022 Week1/easy_upload.md",
              },
              {
                text: "Interesting_http",
                link: "/2022/HNCTF 2022 Week1/Interesting_http.md",
              },
              {
                text: "Interesting_include",
                link: "/2022/HNCTF 2022 Week1/Interesting_include.md",
              },
              {
                text: "What is Web",
                link: "/2022/HNCTF 2022 Week1/What is Web.md",
              },
            ],
          },
          {
            text: "HUBUCTF 2022 新生赛",
            collapsible: true,
            children: [
              {
                text: "checkin",
                link: "/2022/HUBUCTF 2022 新生赛/checkin.md",
              },
              {
                text: "HowToGetShell",
                link: "/2022/HUBUCTF 2022 新生赛/HowToGetShell.md",
              },
            ],
          },
          {
            text: "hxp CTF 2022",
            collapsible: true,
            children: [
              {
                text: "required",
                link: "/2022/hxp CTF 2022/required.md",
              },
              {
                text: "valentine",
                link: "/2022/hxp CTF 2022/valentine.md",
              },
            ],
          },
          {
            text: "NISACTF 2022",
            collapsible: true,
            children: [
              {
                text: "babyserialize",
                link: "/2022/NISACTF 2022/babyserialize.md",
              },
              {
                text: "babyupload",
                link: "/2022/NISACTF 2022/babyupload.md",
              },
              {
                text: "bingdundun~",
                link: "/2022/NISACTF 2022/bingdundun~.md",
              },
              {
                text: "checkin",
                link: "/2022/NISACTF 2022/checkin.md",
              },
              {
                text: "easyssrf",
                link: "/2022/NISACTF 2022/easyssrf.md",
              },
              {
                text: "is secret",
                link: "/2022/NISACTF 2022/is secret.md",
              },
              {
                text: "join-us",
                link: "/2022/NISACTF 2022/join-us.md",
              },
              {
                text: "level-up",
                link: "/2022/NISACTF 2022/level-up.md",
              },
              {
                text: "middlerce",
                link: "/2022/NISACTF 2022/middlerce.md",
              },
              {
                text: "midlevel",
                link: "/2022/NISACTF 2022/midlevel.md",
              },
              {
                text: "popchains",
                link: "/2022/NISACTF 2022/popchains.md",
              },
            ],
          },
          {
            text: "NSSCTF 2022 Spring Recruit",
            collapsible: true,
            children: [
              {
                text: "babyphp",
                link: "/2022/NSSCTF 2022 Spring Recruit/babyphp.md",
              },
              {
                text: "ezgame",
                link: "/2022/NSSCTF 2022 Spring Recruit/ezgame.md",
              },
            ],
          },
          {
            text: "SWPUCTF 2022 新生赛",
            collapsible: true,
            children: [
              {
                text: "1z_unserialize",
                link: "/2022/SWPUCTF 2022 新生赛/1z_unserialize.md",
              },
              {
                text: "ez_ez_php(revenge)",
                link: "/2022/SWPUCTF 2022 新生赛/ez_ez_php(revenge).md",
              },
              {
                text: "ez_ez_php",
                link: "/2022/SWPUCTF 2022 新生赛/ez_ez_php.md",
              },
              {
                text: "ez_ez_unserialize",
                link: "/2022/SWPUCTF 2022 新生赛/ez_ez_unserialize.md",
              },
              {
                text: "ez_rce",
                link: "/2022/SWPUCTF 2022 新生赛/ez_rce.md",
              },
              {
                text: "js_sign",
                link: "/2022/SWPUCTF 2022 新生赛/js_sign.md",
              },
              {
                text: "numgame",
                link: "/2022/SWPUCTF 2022 新生赛/numgame.md",
              },
              {
                text: "where_am_i",
                link: "/2022/SWPUCTF 2022 新生赛/where_am_i.md",
              },
              {
                text: "奇妙的MD5",
                link: "/2022/SWPUCTF 2022 新生赛/奇妙的MD5.md",
              },
            ],
          },
          {
            text: "UUCTF 2022 新生赛",
            collapsible: true,
            children: [
              {
                text: "ez_rce",
                link: "/2022/UUCTF 2022 新生赛/ez_rce.md",
              },
              {
                text: "websign",
                link: "/2022/UUCTF 2022 新生赛/websign.md",
              },
            ],
          },
        ],
      },
      {
        text: "2023",
        collapsible: true,
        children: [
          {
            text: "GDOUCTF 2023",
            collapsible: true,
            children: [
              {
                text: "EZ WEB",
                link: "/2023/GDOUCTF 2023/EZ WEB.md",
              },
              {
                text: "ez_ze",
                link: "/2023/GDOUCTF 2023/ez_ze.md",
              },
              {
                text: "hate eat snake",
                link: "/2023/GDOUCTF 2023/hate eat snake.md",
              },
              {
                text: "受不了一点",
                link: "/2023/GDOUCTF 2023/受不了一点.md",
              },
              {
                text: "泄露的伪装",
                link: "/2023/GDOUCTF 2023/泄露的伪装.md",
              },
            ],
          },
          {
            text: "HDCTF 2023",
            collapsible: true,
            children: [
              {
                text: "SearchMaster",
                link: "/2023/HDCTF 2023/SearchMaster.md",
              },
              {
                text: "Welcome To HDCTF 2023",
                link: "/2023/HDCTF 2023/Welcome To HDCTF 2023.md",
              },
            ],
          },
          {
            text: "ISCC 2023",
            collapsible: true,
            children: [
              {
                text: "Where_is_your_love",
                link: "/2023/ISCC 2023/Where_is_your_love.md",
              },
              {
                text: "羊了个羊",
                link: "/2023/ISCC 2023/羊了个羊.md",
              },
            ],
          },
          {
            text: "LitCTF 2023",
            collapsible: true,
            children: [
              {
                text: "1zjs",
                link: "/2023/LitCTF 2023/1zjs.md",
              },
              {
                text: "Flag点击就送！",
                link: "/2023/LitCTF 2023/Flag点击就送！.md",
              },
              {
                text: "Follow me and hack me",
                link: "/2023/LitCTF 2023/Follow me and hack me.md",
              },
              {
                text: "Http pro max plus",
                link: "/2023/LitCTF 2023/Http pro max plus.md",
              },
              {
                text: "PHP是世界上最好的语言！！",
                link: "/2023/LitCTF 2023/PHP是世界上最好的语言！！.md",
              },
              {
                text: "Ping",
                link: "/2023/LitCTF 2023/Ping.md",
              },
              {
                text: "Vim yyds",
                link: "/2023/LitCTF 2023/Vim yyds.md",
              },
              {
                text: "作业管理系统",
                link: "/2023/LitCTF 2023/作业管理系统.md",
              },
              {
                text: "导弹迷踪",
                link: "/2023/LitCTF 2023/导弹迷踪.md",
              },
              {
                text: "我Flag呢？",
                link: "/2023/LitCTF 2023/我Flag呢？.md",
              },
              {
                text: "简单包含",
                link: "/2023/LitCTF 2023/简单包含.md",
              },
              {
                text: "这是什么？SQL ！注一下 ！",
                link: "/2023/LitCTF 2023/这是什么？SQL ！注一下 ！.md",
              },
            ],
          },
          {
            text: "SWPU NSS 秋季招新赛",
            collapsible: true,
            children: [
              {
                text: "colorful_snake",
                link: "/2023/SWPU NSS 秋季招新赛/colorful_snake.md",
              },
              {
                text: "ez_talk",
                link: "/2023/SWPU NSS 秋季招新赛/ez_talk.md",
              },
              {
                text: "NSS_HTTP_CHEKER",
                link: "/2023/SWPU NSS 秋季招新赛/NSS_HTTP_CHEKER.md",
              },
              {
                text: "一键连接!",
                link: "/2023/SWPU NSS 秋季招新赛/一键连接!.md",
              },
            ],
          },
        ],
      },
      {
        text: "ctfshow",
        collapsible: true,
        children: [
          {
            text: "web",
            collapsible: true,
            children: [
              {
                text: "web10",
                link: "/ctfshow/web/web10.md",
              },
              {
                text: "web11",
                link: "/ctfshow/web/web11.md",
              },
              {
                text: "web2",
                link: "/ctfshow/web/web2.md",
              },
              {
                text: "web3",
                link: "/ctfshow/web/web3.md",
              },
              {
                text: "web4",
                link: "/ctfshow/web/web4.md",
              },
              {
                text: "web5",
                link: "/ctfshow/web/web5.md",
              },
              {
                text: "web6",
                link: "/ctfshow/web/web6.md",
              },
              {
                text: "web7",
                link: "/ctfshow/web/web7.md",
              },
              {
                text: "web8",
                link: "/ctfshow/web/web8.md",
              },
              {
                text: "web9",
                link: "/ctfshow/web/web9.md",
              },
              {
                text: "web签到题",
                link: "/ctfshow/web/web签到题.md",
              },
            ],
          },
        ],
      },
    ],
  }),
};
