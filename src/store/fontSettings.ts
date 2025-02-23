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
  fontSettings.setKey('textSize', newSize);
  localStorage.setItem('userTextSize', newSize);
};

export const updateLineHeight = (newHeight: string) => {
  fontSettings.setKey('lineHeight', newHeight);
  localStorage.setItem('userLineHeight', newHeight);
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
