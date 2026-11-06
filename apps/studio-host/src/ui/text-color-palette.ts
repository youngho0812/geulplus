/** 글자색 팔레트: 자주 쓰는 색을 한 번에 고를 수 있는 드롭다운 */

export const TEXT_COLOR_AUTO = '#000000';

/** 문서용 기본 글자색 (10열 × 3행: 기본 / 밝게 / 어둡게) */
export const TEXT_COLOR_PALETTE: readonly (readonly string[])[] = [
  ['#000000', '#7f7f7f', '#c00000', '#ff0000', '#ff9900', '#ffc000', '#00b050', '#00b0f0', '#0070c0', '#7030a0'],
  ['#595959', '#bfbfbf', '#e6b8b7', '#ff9999', '#ffcc99', '#ffe699', '#a9d08e', '#9bc2e6', '#8eaadb', '#b4a7d6'],
  ['#262626', '#404040', '#7f0000', '#990000', '#b45f06', '#bf9000', '#38761d', '#0b5394', '#1f3864', '#351c75'],
];

export const RECENT_TEXT_COLOR_LIMIT = 10;

/** 최근 사용 색 목록 갱신: 맨 앞에 추가, 중복 제거, 최대 개수 유지 */
export function pushRecentColor(recent: readonly string[], color: string): string[] {
  const normalized = color.toLowerCase();
  return [normalized, ...recent.filter((c) => c !== normalized)].slice(0, RECENT_TEXT_COLOR_LIMIT);
}

interface TextColorPaletteOptions {
  dropdown: HTMLElement;
  button: HTMLButtonElement;
  palette: HTMLElement;
  picker: HTMLInputElement;
  onPick: (color: string) => void;
}

export function setupTextColorPalette(opts: TextColorPaletteOptions): void {
  const { dropdown, button, palette, picker, onPick } = opts;
  let recent: string[] = [];
  const recentLabel = createLabel('최근 사용한 색');
  const recentRow = document.createElement('div');
  recentLabel.hidden = true;
  recentRow.hidden = true;

  const close = () => dropdown.classList.remove('open');
  const pick = (color: string) => {
    onPick(color);
    recent = pushRecentColor(recent, color);
    renderSwatchRow(recentRow, recent, pick);
    recentLabel.hidden = false;
    recentRow.hidden = false;
    close();
  };

  palette.appendChild(createActions(picker, pick));
  palette.appendChild(createLabel('기본 색'));
  for (const row of TEXT_COLOR_PALETTE) {
    const rowEl = document.createElement('div');
    renderSwatchRow(rowEl, row, pick);
    palette.appendChild(rowEl);
  }
  palette.append(recentLabel, recentRow);

  button.addEventListener('mousedown', (e) => {
    e.preventDefault();
    e.stopPropagation();
  });
  button.addEventListener('click', () => dropdown.classList.toggle('open'));
  dropdown.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape' || !dropdown.classList.contains('open')) return;
    event.preventDefault();
    event.stopPropagation();
    close();
    button.focus();
  });
  document.addEventListener('mousedown', (e) => {
    if (!dropdown.contains(e.target as Node)) close();
  });
}

function createActions(picker: HTMLInputElement, pick: (color: string) => void): HTMLElement {
  const row = document.createElement('div');
  row.className = 'sb-hl-palette-actions';
  const btnAuto = createActionButton('자동 (검정)', () => pick(TEXT_COLOR_AUTO));
  const btnOther = createActionButton('다른 색...', () => picker.click());
  picker.addEventListener('change', () => pick(picker.value));
  row.append(btnAuto, btnOther);
  return row;
}

function createActionButton(label: string, onClick: () => void): HTMLButtonElement {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.textContent = label;
  btn.addEventListener('mousedown', (e) => e.preventDefault());
  btn.addEventListener('click', onClick);
  return btn;
}

function createLabel(text: string): HTMLElement {
  const label = document.createElement('div');
  label.className = 'sb-tc-palette-label';
  label.textContent = text;
  return label;
}

function renderSwatchRow(rowEl: HTMLElement, colors: readonly string[], pick: (color: string) => void): void {
  rowEl.className = 'sb-hl-palette-row';
  rowEl.replaceChildren();
  for (const color of colors) {
    const swatch = document.createElement('div');
    swatch.className = 'sb-hl-swatch';
    swatch.style.background = color;
    swatch.title = color;
    swatch.addEventListener('mousedown', (e) => {
      e.preventDefault();
      pick(color);
    });
    rowEl.appendChild(swatch);
  }
}
