// 세종과학고 특강(2026-09-23) 공개판을 sejong-2026/에 빌드한다.
// 소스는 neural-explorer/src/lecture(React)에 그대로 두고, 그 저장소의 vite로 한 파일(lecture.js)로 묶는다.
// 영상(이세돌 인터뷰·하사비스 특강 mp4)은 저작권 때문에 넣지 않는다. 영상이 든 완성본은 neural-explorer/private/lecture-complete
// 사용: node tools/build-sejong.mjs [neural-explorer 경로]
import { cp, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ne = path.resolve(process.argv[2] || path.join(here, '../neural-explorer'));
const out = path.join(here, 'sejong-2026');
const load = async (name) => {   // neural-explorer에 설치된 패키지를 그 경로에서 불러온다
  const dir = path.join(ne, 'node_modules', name);
  const pkg = JSON.parse(await readFile(path.join(dir, 'package.json'), 'utf8'));
  const entry = typeof pkg.exports?.['.'] === 'string' ? pkg.exports['.'] : pkg.exports?.['.']?.import?.default || pkg.exports?.['.']?.import || pkg.module || pkg.main;
  return import(pathToFileURL(path.join(dir, entry)).href);
};
process.chdir(ne);   // Tailwind·PostCSS 설정은 작업 폴더 기준으로 찾는다
const { build } = await load('vite');
const react = (await load('@vitejs/plugin-react')).default;

await build({
  configFile: false, root: ne, base: './', publicDir: false, logLevel: 'warn',
  plugins: [react()],
  define: { 'process.env.NODE_ENV': JSON.stringify('production') },
  build: {
    outDir: out, emptyOutDir: true, cssCodeSplit: false,
    lib: { entry: path.join(ne, 'src/lecture/offline.tsx'), name: 'NeuralLecture', formats: ['iife'], fileName: () => 'lecture.js', cssFileName: 'lecture' },
  },
});
await cp(path.join(ne, 'public/lecture-assets'), path.join(out, 'lecture-assets'), {
  recursive: true, filter: (f) => !f.endsWith('.mp4'),
});
await writeFile(path.join(out, 'index.html'), `<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>AI 시대의 지피지기</title>
<meta name="description" content="세종과학고등학교 특강(2026-09-23) 발표 슬라이드">
<link rel="icon" href="../favicon.ico" sizes="16x16 32x32 48x48">
<link rel="icon" type="image/svg+xml" sizes="any" href="../favicon.svg">
<link rel="stylesheet" href="lecture.css">
</head>
<body><div id="root"></div><script src="lecture.js"></script></body>
</html>
`);
await rm(path.join(out, '.vite'), { recursive: true, force: true });
console.log('sejong-2026 빌드 완료:', path.relative(here, out));
