import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync, existsSync, mkdirSync, readdirSync, statSync } from 'fs';
import { resolve, join } from 'path';

// Plugin personalizado para copiar assets
const copyAssetsPlugin = () => {
  return {
    name: 'copy-assets',
    writeBundle() {
      const srcAssetsDir = resolve(process.cwd(), 'src/assets');
      const distAssetsDir = resolve(process.cwd(), 'dist/assets');
      
      if (existsSync(srcAssetsDir)) {
        // Criar diretório de destino se não existir
        if (!existsSync(distAssetsDir)) {
          mkdirSync(distAssetsDir, { recursive: true });
        }
        
        // Copiar todos os arquivos
        const copyDir = (src, dest) => {
          const entries = readdirSync(src);
          
          entries.forEach(entry => {
            const srcPath = join(src, entry);
            const destPath = join(dest, entry);
            
            if (statSync(srcPath).isDirectory()) {
              if (!existsSync(destPath)) {
                mkdirSync(destPath, { recursive: true });
              }
              copyDir(srcPath, destPath);
            } else {
              copyFileSync(srcPath, destPath);
            }
          });
        };
        
        copyDir(srcAssetsDir, distAssetsDir);
        console.log('✓ Assets copiados para dist/assets');
      }
    }
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), copyAssetsPlugin()],
  base: '/', // Use '/' for Vercel; adjust if using a custom domain or subdirectory
  server: {
    host: '0.0.0.0',
    port: process.env.PORT ? parseInt(process.env.PORT) : 5173,
  },
  preview: {
    host: '0.0.0.0',
    port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
  },
  build: {
    outDir: 'dist',
    assetsInclude: ['**/*.jpg', '**/*.png', '**/*.svg', '**/*.gif', '**/*.webp'],
  }
});