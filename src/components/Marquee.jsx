// Slow, editorial ticker band of core capabilities.
const ITEMS = [
  'Generative AI', 'RAG', 'Model Context Protocol', 'AI Agents', 'Prompt Engineering',
  'LLM Integration', 'Tool Calling', 'Semantic Search', 'Vector Databases',
  'Python', 'React', 'Flask', 'LangChain', 'TensorFlow', 'PyTorch', 'Full-Stack',
]

function Track() {
  return (
    <div className="marquee__track" aria-hidden="true">
      {ITEMS.map((t, i) => (
        <span className="marquee__item" key={i}>
          {t}
          <span className="marquee__dot">✦</span>
        </span>
      ))}
    </div>
  )
}

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__inner">
        <Track />
        <Track />
      </div>
    </div>
  )
}
