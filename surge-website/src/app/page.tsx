export default function Home() {
  return (
    <div className="page-container">
      <section className="mb-section">
        <h1 className="text-display-lg font-display text-text-primary">
          Surge Electric
        </h1>
        <p className="text-subheading text-text-secondary mt-4">
          Engineering the future of electric motorcycles
        </p>
        <button className="mt-8 bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-button transition-colors duration-normal">
          View Our Builds
        </button>
      </section>

      <section className="bg-surface-raised rounded-card p-6 border border-border">
        <h2 className="text-heading">Latest Stats</h2>
        <p className="font-mono text-small text-accent mt-2">
          85 mph · 120 mile range · 0-60 in 3.2s
        </p>
      </section>
    </div>
  );
}