"use client";

import {
  fontSettings,
  initializeFontSettings,
  updateFontFamily,
  updateLineHeight,
  updateTextSize
} from "@/store/fontSettings";
import { ALargeSmall, Settings2, Text, Type } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

type FontFamily = "Fira Code" | "Poppins" | "Libre Baskerville";
const fonts: FontFamily[] = ["Fira Code", "Poppins", "Libre Baskerville"];

type TextSize = "14px" | "16px" | "18px" | "20px";
const textSizes: TextSize[] = ["14px", "16px", "18px", "20px"];

const lineHeights: Record<TextSize, string> = {
  "14px": "1.25rem",
  "16px": "1.5rem",
  "18px": "1.75rem",
  "20px": "2rem"
};

const getInitialState = () => ({
  fontFamily: "Fira Code" as FontFamily,
  textSize: "16px" as TextSize
});

export default function FontSettingsButtons() {
  const { fontFamily: initialFont, textSize: initialSize } = getInitialState();
  const [fontFamily, setFontFamily] = useState<FontFamily>(initialFont);
  const [textSize, setTextSize] = useState<TextSize>(initialSize);

  const updateStyles = useCallback(
    (font: string, size: string, height: string) => {
      if (typeof window === "undefined") return;

      requestAnimationFrame(() => {
        document.documentElement.style.setProperty("--font-family", font);
        document.documentElement.style.setProperty("--text-size", size);
        document.documentElement.style.setProperty("--line-height", height);
      });
    },
    []
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedFont = window.localStorage.getItem(
        "userFontFamily"
      ) as FontFamily | null;
      const savedSize = window.localStorage.getItem(
        "userTextSize"
      ) as TextSize | null;

      if (savedFont && fonts.includes(savedFont)) {
        setFontFamily(savedFont);
        updateStyles(savedFont, textSize, lineHeights[textSize]);
      }
      if (savedSize && textSizes.includes(savedSize)) {
        setTextSize(savedSize);
        updateStyles(fontFamily, savedSize, lineHeights[savedSize]);
      }
    }

    initializeFontSettings();

    const unsubscribe = fontSettings.subscribe(
      ({ fontFamily: newFont, textSize: newSize, lineHeight }) => {
        if (fonts.includes(newFont as FontFamily)) {
          setFontFamily(newFont as FontFamily);
        }

        if (textSizes.includes(newSize as TextSize)) {
          setTextSize(newSize as TextSize);
        }

        updateStyles(newFont, newSize, lineHeight);
      }
    );

    return () => {
      unsubscribe();
    };
  }, [updateStyles, fontFamily, textSize]);

  const handleFontChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const newFont = e.target.value as FontFamily;
      updateFontFamily(newFont);
      updateStyles(newFont, textSize, lineHeights[textSize]);
    },
    [textSize, updateStyles]
  );

  const handleSizeChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const newSize = e.target.value as TextSize;
      updateTextSize(newSize);
      updateLineHeight(lineHeights[newSize]);
      updateStyles(fontFamily, newSize, lineHeights[newSize]);
    },
    [fontFamily, updateStyles]
  );

  const fontToggle = useCallback(() => {
    const currentIndex = fonts.indexOf(fontFamily);
    const newFont = fonts[(currentIndex + 1) % fonts.length];
    updateFontFamily(newFont);
    updateStyles(newFont, textSize, lineHeights[textSize]);
  }, [fontFamily, textSize, updateStyles]);

  const fontSizeToggle = useCallback(() => {
    const currentIndex = textSizes.indexOf(textSize);
    const newSize = textSizes[(currentIndex + 1) % textSizes.length];
    updateTextSize(newSize);
    updateLineHeight(lineHeights[newSize]);
    updateStyles(fontFamily, newSize, lineHeights[newSize]);
  }, [fontFamily, textSize, updateStyles]);

  return (
    <div className="font-settings-container" id="font-settings">
      <span className="hidden lg:flex items-center text-lg font-light text-secondary-white mb-4">
        Reading Preferences
      </span>
      <div className="font-settings">
        <div className="hidden lg:flex gap-4">
          <div className="setting-group">
            <Type className="text-secondary-white" />
            <select
              id="font-family"
              className="font-family-select"
              value={fontFamily}
              onChange={handleFontChange}
            >
              <option value="Fira Code">Monospace</option>
              <option value="Poppins">Sans Serif</option>
              <option value="Libre Baskerville">Serif</option>
            </select>
          </div>

          <div className="setting-group">
            <ALargeSmall className=" text-secondary-white" />
            <select id="text-size" value={textSize} onChange={handleSizeChange}>
              <option value="14px">0.5pt</option>
              <option value="16px">1pt</option>
              <option value="18px">1.5pt</option>
              <option value="20px">2pt</option>
            </select>
          </div>
        </div>

        {/* FONT TOGGLERS FOR MOBILE */}
        <div className="flex flex-col lg:hidden gap-5">
          <button
            id="font-toggle"
            type="button"
            onClick={fontToggle}
            className="py-1 px-3 rounded-xl dark:bg-secondary-dark bg-background-light transition-all duration-400 border-[1px] dark:border-secondary-dark border-white lg:ml-4 hover:scale-90 active:scale-90 shadow-md dark:shadow-md dark:shadow-primary text-xl text-secondary-white dark:text-secondary-white"
            title="Toggle font"
          >
            <span>T</span>
          </button>

          <button
            id="font-size-toggle"
            type="button"
            onClick={fontSizeToggle}
            className="p-2 rounded-xl dark:bg-secondary-dark bg-background-light transition-all duration-400 border-[1px] dark:border-secondary-dark border-white lg:ml-4 hover:scale-90 active:scale-90 shadow-md dark:shadow-md dark:shadow-primary text-xl text-secondary-white dark:text-secondary-white"
            title="Toggle font size"
          >
            <ALargeSmall className="text-xl text-secondary-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
