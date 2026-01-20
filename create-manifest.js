import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const manifest = {
  version: 1,
  framework: {
    name: 'react',
    version: '18.0.0'
  }
};

const distPath = join(__dirname, 'dist');
const manifestPath = join(distPath, 'deploy-manifest.json');

if (!existsSync(distPath)) {
  mkdirSync(distPath, { recursive: true });
}

writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
console.log('✓ deploy-manifest.json created successfully');
