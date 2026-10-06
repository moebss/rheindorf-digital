import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');

console.log('>> Deploying dist to GitHub Pages (gh-pages branch)...');

// Verify dist exists
if (!fs.existsSync(distDir)) {
  console.error('[ERROR] dist directory does not exist. Run npm run build first.');
  process.exit(1);
}

// Ensure CNAME and .nojekyll exist
fs.writeFileSync(path.join(distDir, 'CNAME'), 'rheindorf.digital\n');
fs.writeFileSync(path.join(distDir, '.nojekyll'), '# Disable Jekyll\n');

// Remove existing .git in dist if leftover
const gitDir = path.join(distDir, '.git');
if (fs.existsSync(gitDir)) {
  fs.rmSync(gitDir, { recursive: true, force: true });
}

// Git commit and push from dist
try {
  execSync('git init -b main', { cwd: distDir, stdio: 'inherit' });
  execSync('git config user.name "Alexander Rheindorf"', { cwd: distDir, stdio: 'inherit' });
  execSync('git config user.email "Alexander.Rheindorf@honestis.ag"', { cwd: distDir, stdio: 'inherit' });
  execSync('git add -A', { cwd: distDir, stdio: 'inherit' });
  execSync('git commit -m "Deploy: GitHub Pages static build"', { cwd: distDir, stdio: 'inherit' });
  execSync('git remote add origin git@github.com:moebss/rheindorf-digital.git', { cwd: distDir, stdio: 'inherit' });
  execSync('git push -f origin main:gh-pages', { cwd: distDir, stdio: 'inherit' });
  console.log('>> Successfully pushed to origin gh-pages!');
} catch (err) {
  console.error('[ERROR] Failed to push to gh-pages:', err);
  process.exit(1);
} finally {
  if (fs.existsSync(gitDir)) {
    fs.rmSync(gitDir, { recursive: true, force: true });
  }
}
