// Editorial dotted/dashed grid, fixed behind everything and faded out
// with a radial mask so it reads as a subtle texture, not a spreadsheet.
const mask = `repeating-linear-gradient(to right, #000 0 3px, transparent 3px 8px),
  repeating-linear-gradient(to bottom, #000 0 3px, transparent 3px 8px),
  radial-gradient(ellipse 75% 65% at 50% 0%, #000 55%, transparent 100%)`

export default function GridBackground() {
  return (
    <div
      className="grid-bg"
      aria-hidden="true"
      style={{
        maskImage: mask,
        WebkitMaskImage: mask,
        maskComposite: 'intersect',
        WebkitMaskComposite: 'source-in',
      }}
    />
  )
}
