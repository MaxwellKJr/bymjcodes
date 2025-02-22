import { map } from 'nanostores';

export type FontSettings = {
  fontFamily: string;
  textSize: string;
  lineHeight: string;
};

export const fontSettings = map<FontSettings>({
  fontFamily: 'Fira Code',
  textSize: '16px',
  lineHeight: '1.5rem'
});

export const updateFontFamily = (newFont: string) => {
  fontSettings.setKey('fontFamily', newFont);
  localStorage.setItem('userFontFamily', newFont);
};

export const updateTextSize = (newSize: string) => {
  // Update line height based on text size
  const lineHeights = {
    '14px': '1.25rem',
    '16px': '1.5rem',
    '18px': '1.75rem',
    '20px': '2rem'
  };
  
  const lineHeight = lineHeights[newSize as keyof typeof lineHeights] || '1.5rem';
  
  fontSettings.setKey('textSize', newSize);
  fontSettings.setKey('lineHeight', lineHeight);
  localStorage.setItem('userTextSize', newSize);
  localStorage.setItem('userLineHeight', lineHeight);
};

export const initializeFontSettings = () => {
  const savedFont = localStorage.getItem('userFontFamily');
  const savedSize = localStorage.getItem('userTextSize');
  const savedLineHeight = localStorage.getItem('userLineHeight');
  
  if (savedFont) {
    fontSettings.setKey('fontFamily', savedFont);
  }
  if (savedSize) {
    fontSettings.setKey('textSize', savedSize);
  }
  if (savedLineHeight) {
    fontSettings.setKey('lineHeight', savedLineHeight);
  }
};
