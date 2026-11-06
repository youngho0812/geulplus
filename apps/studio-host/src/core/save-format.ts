import type { ContentLossReport } from '@/upstream/core';

export type SaveFormat = 'hwp' | 'hwpx';

export interface SaveDialogFilter {
  name: string;
  extensions: string[];
}

const FILTERS: Record<SaveFormat, SaveDialogFilter> = {
  hwpx: { name: 'HWPX 문서', extensions: ['hwpx'] },
  hwp: { name: 'HWP 문서', extensions: ['hwp'] },
};

/** Save-dialog filters with the preferred format first so it becomes the default choice. */
export function saveDialogFilters(preferred: SaveFormat): SaveDialogFilter[] {
  return preferred === 'hwpx' ? [FILTERS.hwpx, FILTERS.hwp] : [FILTERS.hwp, FILTERS.hwpx];
}

/** The chosen extension decides the output format; a bare name falls back to the preferred one. */
export function saveFormatFromPath(path: string, fallback: SaveFormat): SaveFormat {
  if (/\.hwpx$/i.test(path)) return 'hwpx';
  if (/\.hwp$/i.test(path)) return 'hwp';
  return fallback;
}

export function suggestedDocumentName(fileName: string, format: SaveFormat): string {
  const name = fileName.replace(/\.(hwp|hwpx)$/i, '') || 'document';
  return `${name}.${format}`;
}

export function isSameFilePath(a: string | null, b: string): boolean {
  if (!a) return false;
  const normalize = (p: string) => p.replace(/\\/g, '/').toLowerCase();
  return normalize(a) === normalize(b);
}

const SUBJECT_LABELS: Record<string, string> = {
  binaryData: '그림·첨부 데이터',
  control: '개체/컨트롤',
  fieldParameters: '필드 설정',
};

/** Pre-save warning text, or null when the serializer reported no content loss. */
export function contentLossWarning(report: ContentLossReport): string | null {
  if (report.losses.length === 0) return null;
  const shown = report.losses.slice(0, 5).map(
    (loss) => `• ${SUBJECT_LABELS[loss.subject] ?? loss.subject}: ${loss.path}`,
  );
  const remaining = report.losses.length - shown.length;
  if (remaining > 0) shown.push(`• 그 밖의 손실 ${remaining}건`);
  return [
    `${report.outputFormat.toUpperCase()}로 저장하면 다음 내용을 보존하지 못합니다.`,
    ...shown,
    '',
    '그래도 저장하시겠습니까?',
  ].join('\n');
}
