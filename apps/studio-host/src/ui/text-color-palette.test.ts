import { describe, expect, it } from 'vitest';
import {
  RECENT_TEXT_COLOR_LIMIT,
  TEXT_COLOR_AUTO,
  TEXT_COLOR_PALETTE,
  pushRecentColor,
} from './text-color-palette';

describe('text color palette', () => {
  it('offers black and common document colors as valid hex values', () => {
    const colors = TEXT_COLOR_PALETTE.flat();
    expect(colors).toContain(TEXT_COLOR_AUTO);
    expect(colors).toEqual(expect.arrayContaining(['#ff0000', '#0070c0', '#00b050']));
    for (const color of colors) expect(color).toMatch(/^#[0-9a-f]{6}$/);
    expect(new Set(colors).size).toBe(colors.length);
  });

  it('keeps recent colors most-recent-first without duplicates', () => {
    let recent: string[] = [];
    recent = pushRecentColor(recent, '#FF0000');
    recent = pushRecentColor(recent, '#0070c0');
    recent = pushRecentColor(recent, '#ff0000');
    expect(recent).toEqual(['#ff0000', '#0070c0']);
  });

  it('caps the recent color list', () => {
    let recent: string[] = [];
    for (let i = 0; i < RECENT_TEXT_COLOR_LIMIT + 5; i++) {
      recent = pushRecentColor(recent, `#0000${i.toString(16).padStart(2, '0')}`);
    }
    expect(recent).toHaveLength(RECENT_TEXT_COLOR_LIMIT);
    expect(recent[0]).toBe(`#0000${(RECENT_TEXT_COLOR_LIMIT + 4).toString(16).padStart(2, '0')}`);
  });
});
