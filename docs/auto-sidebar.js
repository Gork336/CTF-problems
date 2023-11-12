const fs = require("fs");
const path = require("path");

// 生成侧边栏配置的函数
function generateSidebarConfig(dir) {
  const sidebar = [];
  const years = fs.readdirSync(dir); // 读取指定目录下的所有文件和文件夹

  years.forEach((year) => {
    const yearDir = path.join(dir, year); // 拼接年份文件夹的路径
    if (fs.statSync(yearDir).isDirectory()) {
      // 检查是否是文件夹
      const yearItem = {
        text: year, // 年份作为侧边栏标题
        collapsible: true,
        children: [], // 存放该年份下的比赛项
      };

      const competitions = fs.readdirSync(yearDir); // 读取该年份下的所有文件和文件夹

      competitions.forEach((competition) => {
        const competitionDir = path.join(yearDir, competition); // 拼接比赛文件夹的路径
        if (fs.statSync(competitionDir).isDirectory()) {
          // 检查是否是文件夹
          const competitionItem = {
            text: competition, // 比赛名称作为侧边栏标题
            collapsible: true,
            children: [], // 存放该比赛下的问题项
          };

          const problems = fs.readdirSync(competitionDir); // 读取该比赛下的所有文件

          problems.forEach((problem) => {
            const problemPath = path.join(competitionDir, problem); // 拼接问题文件的路径
            const problemName = path.basename(problem, path.extname(problem)); // 获取问题文件的名称（去除扩展名）

            competitionItem.children.push({
              text: problemName, // 问题名称作为侧边栏标题
              link: `/${year}/${competition}/${problemName}.md`, // 问题文件的链接
            });
          });

          yearItem.children.push(competitionItem);
        }
      });

      sidebar.push(yearItem);
    }
  });

  return sidebar;
}

// 输入您的文件夹路径
const sidebarConfig = generateSidebarConfig("./docs");

// 将侧边栏配置写入 JSON 文件
fs.writeFileSync("sidebarConfig.json", JSON.stringify(sidebarConfig, null, 2));

console.log("侧边栏配置已写入 sidebarConfig.json 文件。");
