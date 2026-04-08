import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const PORT = 3333;
const DIR = path.dirname(fileURLToPath(import.meta.url));

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.glb': 'model/gltf-binary',
  '.gltf': 'model/gltf+json',
  '.bin': 'application/octet-stream',
};

// SSE clients for hot reload
const sseClients = new Set();

const server = http.createServer((req, res) => {
  // SSE endpoint for hot reload
  if (req.url === '/__reload') {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
      'Access-Control-Allow-Origin': '*',
    });
    res.write('data: connected\n\n');
    sseClients.add(res);
    req.on('close', () => sseClients.delete(res));
    return;
  }

  // Manual reload trigger: POST /__trigger-reload
  if (req.url === '/__trigger-reload' && req.method === 'POST') {
    console.log(`  ↻  Reload triggered — notifying ${sseClients.size} browser(s)`);
    for (const client of sseClients) {
      try { client.write('data: reload\n\n'); } catch {}
    }
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('ok');
    return;
  }

  let filePath = path.join(DIR, req.url === '/' ? 'index.html' : req.url);
  const ext = path.extname(filePath);
  const contentType = mimeTypes[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Not found');
      return;
    }
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`\n  🐴 Konik Matematyczny dev server`);
  console.log(`  ➜  http://localhost:${PORT}`);
  console.log(`  ↻  Reload: curl -X POST http://localhost:${PORT}/__trigger-reload\n`);
});
