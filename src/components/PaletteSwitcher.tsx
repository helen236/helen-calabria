import { usePalette, paletteKeys, palettes } from "../context/PaletteContext";

export default function PaletteSwitcher() {
  const { paletteKey, palette, nextPalette, prevPalette, setPaletteKey } = usePalette();
  const idx = paletteKeys.indexOf(paletteKey);

  const prevKey = paletteKeys[(idx - 1 + paletteKeys.length) % paletteKeys.length];
  const nextKey = paletteKeys[(idx + 1) % paletteKeys.length];

  return (
    <div style={{ position: "fixed", bottom: 24, right: 24, zIndex: 50 }} className="flex flex-col items-end gap-2">
      <div
        style={{
          backgroundColor: "var(--hc-surface)",
          border: "1px solid var(--hc-border)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
          color: "var(--hc-primary-dark)",
        }}
        className="flex items-center rounded-full overflow-hidden"
      >
        <button onClick={prevPalette} title={palettes[prevKey].name} className="flex items-center justify-center w-9 h-9 text-lg hover:opacity-60 transition-opacity" style={{ color: "var(--hc-primary-mid)" }}>‹</button>
        <div className="flex items-center gap-2 px-1 min-w-[120px] justify-center">
          <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: palette.primary, boxShadow: `0 0 0 2px ${palette.accent}` }} />
          <span className="text-xs font-medium tracking-wide whitespace-nowrap" style={{ color: "var(--hc-primary-dark)" }}>{palette.name}</span>
        </div>
        <button onClick={nextPalette} title={palettes[nextKey].name} className="flex items-center justify-center w-9 h-9 text-lg hover:opacity-60 transition-opacity" style={{ color: "var(--hc-primary-mid)" }}>›</button>
      </div>

      <div className="flex items-center justify-end gap-1 pr-1 flex-wrap max-w-[180px]">
        {paletteKeys.map((key, i) => (
          <button
            key={key}
            onClick={() => setPaletteKey(key)}
            title={palettes[key].name}
            style={{
              width: i === idx ? 14 : 5,
              height: 5,
              borderRadius: 99,
              backgroundColor: i === idx ? palette.primary : palette.border,
              transition: "width 0.2s, background-color 0.2s",
            }}
          />
        ))}
      </div>
    </div>
  );
}
