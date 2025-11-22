import fs from 'fs-extra';

async function main(): Promise<void> {
  const name = process.argv[2];
  const target = process.argv[3] || 'apps';
  if (!name) {
    console.error('请提供项目名称，例如：pnpm lab:create demo');
    process.exit(1);
  }
  const base = target === 'packages' ? `../../../packages/${name}` : `../../../apps/${name}`;
  const dir = new URL(base, import.meta.url);
  await fs.ensureDir(dir);
  const pkg = new URL(`${base}/package.json`, import.meta.url);
  await fs.writeFile(
    pkg,
    JSON.stringify(
      {
        name: `@fe-learning/${name}`,
        private: true,
        version: '0.0.0'
      },
      null,
      2
    ),
    'utf8'
  );
  console.log(`已创建骨架: ${target}/${name}`);
}

main().catch((e) => {
  console.error('创建失败', e);
  process.exit(1);
});
