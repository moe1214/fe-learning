import Database from 'better-sqlite3';
import { readFileSync } from 'fs';
import { resolve } from 'path';

function main(): void {
  const file = process.argv[2];
  if (!file) {
    console.error('请提供要执行的 SQL 文件路径，例如：pnpm sql:run scripts/init.sql');
    process.exit(1);
  }
  const db = new Database(resolve('sqlite.db'));
  const sql = readFileSync(resolve(file), 'utf8');
  const statements = sql.split(';').map((s) => s.trim()).filter(Boolean);
  for (const s of statements) {
    db.prepare(s).run();
  }
  console.log('SQL 执行完成');
}

main();