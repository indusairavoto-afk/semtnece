import { execSync } from 'child_process';
import path from 'path';

try {
  const extDir = path.join(process.cwd(), 'public', 'extension');
  const zipPath = path.join(process.cwd(), 'public', 'chatgpt-extractor.zip');
  execSync(`npx -y bestzip ${zipPath} *`, { cwd: extDir, stdio: 'inherit' });
  console.log('Zipped successfully using bestzip!');
} catch (e) {
  console.error('Failed to zip:', e);
  process.exit(1);
}
