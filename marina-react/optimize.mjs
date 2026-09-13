import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const assetsDir = path.join(process.cwd(), 'public', 'assets');

async function optimizeImages() {
  const files = fs.readdirSync(assetsDir);
  
  for (const file of files) {
    if (file.endsWith('.png')) {
      const inputPath = path.join(assetsDir, file);
      const outputPath = path.join(assetsDir, file.replace('.png', '.webp'));
      
      console.log(`Optimizing ${file}...`);
      await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath);
      console.log(`Created ${file.replace('.png', '.webp')}`);
    }
  }
}

optimizeImages().catch(console.error);
