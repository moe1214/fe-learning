import { writeFile, ensureDir } from 'fs-extra';
import { formatDate } from '@fe-learning/shared';

async function main(): Promise<void> {
  const today = formatDate(new Date());
  const dir = new URL('../../../journal/', import.meta.url);
  const file = new URL(`../../../journal/${today}.md`, import.meta.url);
  await ensureDir(dir);
  const content = `# ${today} 日报\n\n- 学习内容：\n- 练手项目：\n- 总结：\n`;
  await writeFile(file, content, 'utf8');
  console.log(`已生成: journal/${today}.md`);
}

main().catch((e) => {
  console.error('生成失败', e);
  process.exit(1);
});
