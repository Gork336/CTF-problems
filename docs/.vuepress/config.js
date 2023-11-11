import { defaultTheme } from "@vuepress/theme-default";

export default {
  base: "/CTF-problems/",
  title: "CTF-problems",
  theme: defaultTheme({
    home: "/",
    // 在这里进行配置
    sidebar: [
      {
        text: "首页",
        link: "/README.md",
      },
      // 2018
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
      //2019
      {
        text: "2019",
        collapsible: true,
        children: [
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
                text: "BabyUpload",
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
        ],
      },
      //2020
      {
        text: "2020",
        collapsible: true,
        children: [
          //羊城杯 2020
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
          //BJDCTF 2020
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
          //WUSTCTF 2020
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
        ],
      },
      //2021
      {
        text: "2021",
        collapsible: true,
        children: [
          //第五空间 2021
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
          //鹤城杯 2021
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
          //天翼杯 2021
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
          //GKCTF 2021
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
          //SWPUCTF 2021 新生赛
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
                text: "easy_md5",
                link: "/2021/SWPUCTF 2021 新生赛/easy_md5.md",
              },
              {
                text: "easy_sql",
                link: "/2021/SWPUCTF 2021 新生赛/easy_sql.md",
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
                text: "error",
                link: "/2021/SWPUCTF 2021 新生赛/error.md",
              },
              {
                text: "ez_unserialize",
                link: "/2021/SWPUCTF 2021 新生赛/ez_unserialize.md",
              },
            ],
          },
        ],
      },
    ],
  }),
};
