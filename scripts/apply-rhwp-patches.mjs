// 글플러스가 rhwp 서브모듈에 덧붙이는 수정(patches/rhwp.patch)을 적용한다.
// 이미 적용돼 있으면 아무것도 하지 않는다. upstream이 같은 수정을 릴리즈하면
// patches/rhwp.patch를 지우면 된다.
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { repoRoot, run, upstreamDir } from './lib/rhwp-upstream.mjs';

export const rhwpPatchPath = join(repoRoot, 'patches/rhwp.patch');

function gitApply(args) {
  return run('git', ['-c', 'core.autocrlf=false', 'apply', '--whitespace=nowarn', ...args, rhwpPatchPath], {
    cwd: upstreamDir,
  });
}

function canApply(args) {
  try {
    gitApply(['--check', ...args]);
    return true;
  } catch {
    return false;
  }
}

export function rhwpPatchApplied() {
  if (!existsSync(rhwpPatchPath)) return true;
  return canApply(['--reverse']);
}

export function applyRhwpPatches() {
  if (!existsSync(rhwpPatchPath)) return 'none';
  if (rhwpPatchApplied()) return 'already-applied';
  if (!canApply([])) {
    throw new Error('patches/rhwp.patch does not apply to the pinned rhwp checkout');
  }
  gitApply([]);
  return 'applied';
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  console.log(`rhwp patch: ${applyRhwpPatches()}`);
}
