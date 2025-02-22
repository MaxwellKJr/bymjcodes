import { map } from 'nanostores';

export type FontSettings = {
  fontFamily: string;
  textSize: string;
};

export const fontSettings = map<FontSettings>({
  fontFamily: 'poppins',
  textSize: '16px'
});

export const updateFontFamily = (newFont: string) => {
  fontSettings.setKey('fontFamily', newFont);
  localStorage.setItem('userFontFamily', newFont);
};

export const updateTextSize = (newSize: string) => {
  fontSettings.setKey('textSize', newSize);
  localStorage.setItem('userTextSize', newSize);
};

export const initializeFontSettings = () => {
  const savedFont = localStorage.getItem('userFontFamily');
  const savedSize = localStorage.getItem('userTextSize');
  
  if (savedFont) {
    fontSettings.setKey('fontFamily', savedFont);
  }
  if (savedSize) {
    fontSettings.setKey('textSize', savedSize);
  }
};
