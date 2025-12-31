"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import MainButton from "../../components/MainButton";
import TeamMember from "@/src/components/TeamMember";
import ImageBlock from "@/src/components/ImageBlock";

export default function PlaygroundPage() {
  const [activeTab, setActiveTab] = useState("colors");

  const tabs = [
    { id: "colors", label: "Colors" },
    { id: "typography", label: "Typography" },
    { id: "spacing", label: "Spacing & Layout" },
    { id: "components", label: "Components" },
    { id: "animations", label: "Animations" },
  ];

  return (
    <div className="page-container pb-20">
      <header className="mb-12">
        <h1 className="text-display-lg font-display">Design System Playground</h1>
        <p className="text-subheading text-text-secondary mt-2">
          Visual reference for all design tokens and components
        </p>
      </header>

      {/* Tab Navigation */}
      <nav className="flex gap-2 mb-12 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-button text-small transition-colors duration-normal ${
              activeTab === tab.id
                ? "bg-accent text-white"
                : "bg-surface-raised text-text-secondary hover:text-text-primary"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {/* Colors */}
      {activeTab === "colors" && (
        <section className="space-y-12">
          <div>
            <h2 className="text-heading mb-6">Surface Colors</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ColorSwatch name="Blue" className="bg-text-blue" />
              <ColorSwatch name="Yellow" className="bg-text-yellow" />
            </div>
          </div>

          <div>
            <h2 className="text-heading mb-6">Border Colors</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <BorderSwatch name="border" className="border-border" />
              <BorderSwatch name="border-subtle" className="border-border-subtle" />
              <BorderSwatch name="border-strong" className="border-border-strong" />
            </div>
          </div>

          <div>
            <h2 className="text-heading mb-6">Text Colors</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-surface-raised rounded-card p-6">
                <p className="text-text-primary text-body">text-primary</p>
                <p className="text-caption text-text-muted mt-1">Primary content, headings</p>
              </div>
              <div className="bg-surface-raised rounded-card p-6">
                <p className="text-text-secondary text-body">text-secondary</p>
                <p className="text-caption text-text-muted mt-1">Supporting content</p>
              </div>
              <div className="bg-surface-raised rounded-card p-6">
                <p className="text-text-muted text-body">text-muted</p>
                <p className="text-caption text-text-muted mt-1">Captions, hints</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-heading mb-6">Accent Colors</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ColorSwatch name="accent" className="bg-accent" />
              <ColorSwatch name="accent-hover" className="bg-accent-hover" />
              <ColorSwatch name="accent-muted" className="bg-accent-muted" />
            </div>
          </div>

          <div>
            <h2 className="text-heading mb-6">Semantic Colors</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ColorSwatch name="success" className="bg-success" />
              <ColorSwatch name="warning" className="bg-warning" />
              <ColorSwatch name="error" className="bg-error" />
            </div>
          </div>
        </section>
      )}

      {/* Typography */}
      {activeTab === "typography" && (
        <section className="space-y-12">
          <div>
            <h2 className="text-heading mb-6">Type Scale</h2>
            <div className="space-y-8 bg-surface-raised rounded-card p-8">
              <TypeSample name="display-xxl" className="text-display-xxl font-display">
                Display XXL
              </TypeSample>
              <TypeSample name="display-xl" className="text-display-xl font-display">
                Display XL
              </TypeSample>
              <TypeSample name="display-lg" className="text-display-lg font-display">
                Display LG
              </TypeSample>
              <TypeSample name="display" className="text-display font-display">
                Display
              </TypeSample>
              <TypeSample name="heading" className="text-heading">
                Heading
              </TypeSample>
              <TypeSample name="subheading" className="text-subheading">
                Subheading
              </TypeSample>
              <TypeSample name="body" className="text-body font-body italic">
                Body text for paragraphs and general content
              </TypeSample>
              <TypeSample name="caption" className="text-small font-body">
                Caption text for labeling images and headshots
              </TypeSample>
            </div>
          </div>

          <div>
            <h2 className="text-heading mb-6">Font Families</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-surface-raised rounded-card p-6">
                <p className="font-sans text-subheading">Font Sans</p>
                <p className="font-sans text-body text-text-secondary mt-2">
                  The quick brown fox jumps over the lazy dog
                </p>
                <code className="text-caption text-accent mt-2 block">font-sans</code>
              </div>
              <div className="bg-surface-raised rounded-card p-6">
                <p className="font-display text-subheading">Font Display</p>
                <p className="font-display text-body text-text-secondary mt-2">
                  The quick brown fox jumps over the lazy dog
                </p>
                <code className="text-caption text-accent mt-2 block">font-display</code>
              </div>
              <div className="bg-surface-raised rounded-card p-6">
                <p className="font-mono text-subheading">Font Mono</p>
                <p className="font-mono text-body text-text-secondary mt-2">
                  The quick brown fox jumps over the lazy dog
                </p>
                <code className="text-caption text-accent mt-2 block">font-mono</code>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Spacing & Layout */}
      {activeTab === "spacing" && (
        <section className="space-y-12">
          <div>
            <h2 className="text-heading mb-6">Spacing Tokens</h2>
            <div className="space-y-4">
              <SpacingSample name="gutter" size="1.5rem" className="w-[1.5rem]" />
              <SpacingSample name="section" size="5rem" className="w-[5rem]" />
              <SpacingSample name="page" size="6rem" className="w-[6rem]" />
            </div>
          </div>

          <div>
            <h2 className="text-heading mb-6">Max Widths</h2>
            <div className="space-y-4">
              <div>
                <p className="text-small text-text-secondary mb-2">
                  max-width-content (72rem)
                </p>
                <div className="bg-accent h-4 rounded max-w-content" />
              </div>
              <div>
                <p className="text-small text-text-secondary mb-2">
                  max-width-narrow (48rem)
                </p>
                <div className="bg-accent-muted h-4 rounded max-w-narrow" />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-heading mb-6">Border Radius</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-surface-raised border border-border rounded-button p-6 text-center">
                <p className="text-body">rounded-button</p>
                <code className="text-caption text-accent">0.5rem</code>
              </div>
              <div className="bg-surface-raised border border-border rounded-card p-6 text-center">
                <p className="text-body">rounded-card</p>
                <code className="text-caption text-accent">0.75rem</code>
              </div>
              <div className="bg-surface-raised border border-border rounded-chip px-6 py-4 text-center">
                <p className="text-body">rounded-chip</p>
                <code className="text-caption text-accent">9999px</code>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-heading mb-6">Utility Classes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-dashed border-border-strong rounded-card p-6">
                <code className="text-accent text-small">page-container</code>
                <p className="text-text-secondary text-small mt-2">
                  pt-page + px-gutter + max-w-content + mx-auto
                </p>
              </div>
              <div className="border border-dashed border-border-strong rounded-card p-6">
                <code className="text-accent text-small">page-container-narrow</code>
                <p className="text-text-secondary text-small mt-2">
                  pt-page + px-gutter + max-w-narrow + mx-auto
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Components */}
      {activeTab === "components" && (
        <section className="space-y-12">
          <div>
            <h2 className="text-heading mb-6">Buttons</h2>
            <div className="flex flex-wrap gap-4">
              <button className="bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-button transition-colors duration-normal">
                Primary Button
              </button>
              <button className="bg-transparent border border-accent text-accent hover:bg-accent hover:text-white px-6 py-3 rounded-button transition-colors duration-normal">
                Outline Button
              </button>
              <button className="bg-transparent text-text-secondary hover:text-text-primary px-6 py-3 rounded-button transition-colors duration-normal">
                Ghost Button
              </button>
              <button className="bg-surface-raised text-text-primary hover:bg-surface-overlay px-6 py-3 rounded-button transition-colors duration-normal">
                Secondary Button
              </button>
              <MainButton>Action Button</MainButton>
            </div>
          </div>

          <div>
            <h2 className="text-heading mb-6">Cards</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-surface-raised rounded-card p-6 border border-border">
                <h3 className="text-subheading">Basic Card</h3>
                <p className="text-text-secondary text-body mt-2">
                  Simple card with border and raised surface.
                </p>
              </div>
              <div className="bg-surface-raised rounded-card p-6 border border-border hover:border-accent transition-colors duration-normal cursor-pointer">
                <h3 className="text-subheading">Interactive Card</h3>
                <p className="text-text-secondary text-body mt-2">
                  Hover to see the accent border.
                </p>
              </div>
              <div className="bg-accent-muted rounded-card p-6 border border-accent">
                <h3 className="text-subheading text-accent-hover">Accent Card</h3>
                <p className="text-text-secondary text-body mt-2">
                  For highlighted content or CTAs.
                </p>
              </div>
            </div>
            <TeamMember
              name="Small Colin O'Brien"
              role="Electrical Lead"
              linkedIn="https://www.linkedin.com/in/colin-o-brien-bb27a1214/"
              imageSrc="/images/team/colinobrien.jpeg"
              size="sm"
            />
            <TeamMember
              name="Medium Colin O'Brien"
              role="Electrical Lead"
              linkedIn="https://www.linkedin.com/in/colin-o-brien-bb27a1214/"
              imageSrc="/images/team/colinobrien.jpeg"
              size="md"
            />
            <TeamMember
              name="Large Colin O'Brien"
              role="Electrical Lead"
              linkedIn="https://www.linkedin.com/in/colin-o-brien-bb27a1214/"
              imageSrc="/images/team/colinobrien.jpeg"
              size="lg"
            />
          </div>

          <div>
            <h2 className="text-heading mb-6">Chips / Tags</h2>
            <div className="flex flex-wrap gap-2">
              <span className="bg-surface-raised text-text-secondary px-4 py-1 rounded-chip text-small">
                Default
              </span>
              <span className="bg-accent text-white px-4 py-1 rounded-chip text-small">
                Active
              </span>
              <span className="bg-success/20 text-success px-4 py-1 rounded-chip text-small">
                Success
              </span>
              <span className="bg-warning/20 text-warning px-4 py-1 rounded-chip text-small">
                Warning
              </span>
              <span className="bg-error/20 text-error px-4 py-1 rounded-chip text-small">
                Error
              </span>
            </div>
          </div>

          <div>
            <h2 className="text-heading mb-6">Inputs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-narrow">
              <div>
                <label className="text-small text-text-secondary block mb-2">
                  Text Input
                </label>
                <input
                  type="text"
                  placeholder="Enter something..."
                  className="w-full bg-surface-raised border border-border rounded-button px-4 py-3 text-body text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none transition-colors duration-normal"
                />
              </div>
              <div>
                <label className="text-small text-text-secondary block mb-2">
                  Select
                </label>
                <select className="w-full bg-surface-raised border border-border rounded-button px-4 py-3 text-body text-text-primary focus:border-accent focus:outline-none transition-colors duration-normal">
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="text-small text-text-secondary block mb-2">
                  Textarea
                </label>
                <textarea
                  placeholder="Write something longer..."
                  rows={4}
                  className="w-full bg-surface-raised border border-border rounded-card px-4 py-3 text-body text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none transition-colors duration-normal resize-none"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-heading mb-6">Images</h2> 
            <ImageBlock src="/images/bikePlaceholder.png" />
          </div>
        </section>
      )}

      {/* Animations */}
      {activeTab === "animations" && (
        <section className="space-y-12">
          <div>
            <h2 className="text-heading mb-6">Transition Durations</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <DurationDemo name="fast" duration="150ms" className="duration-fast" />
              <DurationDemo name="normal" duration="250ms" className="duration-normal" />
              <DurationDemo name="slow" duration="400ms" className="duration-slow" />
            </div>
          </div>

          <div>
            <h2 className="text-heading mb-6">Keyframe Animations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-surface-raised rounded-card p-6 border border-border">
                <p className="text-small text-text-secondary mb-4">animate-fade-in</p>
                <AnimationDemo animation="animate-fade-in" />
              </div>
              <div className="bg-surface-raised rounded-card p-6 border border-border">
                <p className="text-small text-text-secondary mb-4">animate-pulse-glow</p>
                <div className="bg-accent w-full h-16 rounded-button animate-pulse-glow" />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-heading mb-6">Framer Motion Examples</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-surface-raised rounded-card p-6 border border-border">
                <p className="text-small text-text-secondary mb-4">Hover Scale</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-accent text-white py-3 rounded-button"
                >
                  Hover Me
                </motion.button>
              </div>
              <div className="bg-surface-raised rounded-card p-6 border border-border">
                <p className="text-small text-text-secondary mb-4">Hover Lift</p>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-full bg-surface-overlay border border-border rounded-card p-4 text-center cursor-pointer"
                >
                  Hover to Lift
                </motion.div>
              </div>
              <div className="bg-surface-raised rounded-card p-6 border border-border">
                <p className="text-small text-text-secondary mb-4">Hover Glow</p>
                <motion.div
                  whileHover={{
                    boxShadow: "0 0 30px rgba(14, 165, 233, 0.5)",
                  }}
                  className="w-full bg-accent-muted border border-accent rounded-card p-4 text-center cursor-pointer"
                >
                  Hover to Glow
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

/* ================================
   HELPER COMPONENTS
   ================================ */

function ColorSwatch({ name, className }: { name: string; className: string }) {
  return (
    <div className="bg-surface-raised rounded-card overflow-hidden border border-border">
      <div className={`h-24 ${className}`} />
      <div className="p-4">
        <p className="text-body">{name}</p>
        <code className="text-caption text-accent">bg-{name}</code>
      </div>
    </div>
  );
}

function BorderSwatch({ name, className }: { name: string; className: string }) {
  return (
    <div className={`bg-surface-raised rounded-card p-6 border-2 ${className}`}>
      <p className="text-body">{name}</p>
      <code className="text-caption text-accent">border-{name}</code>
    </div>
  );
}

function TypeSample({
  name,
  className,
  children,
}: {
  name: string;
  className: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-border pb-6 last:border-0">
      <p className={`${className} text-text-primary`}>{children}</p>
      <code className="text-caption text-accent mt-2 block">text-{name}</code>
    </div>
  );
}

function SpacingSample({
  name,
  size,
  className,
}: {
  name: string;
  size: string;
  className: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className={`bg-accent h-8 rounded ${className}`} />
      <div>
        <p className="text-body">{name}</p>
        <code className="text-caption text-accent">{size}</code>
      </div>
    </div>
  );
}

function DurationDemo({
  name,
  duration,
  className,
}: {
  name: string;
  duration: string;
  className: string;
}) {
  return (
    <div className="bg-surface-raised rounded-card p-6 border border-border">
      <p className="text-small text-text-secondary mb-4">
        duration-{name} ({duration})
      </p>
      <div
        className={`bg-accent hover:bg-accent-hover h-12 rounded-button transition-colors ${className} cursor-pointer`}
      />
      <p className="text-caption text-text-muted mt-2">Hover to see transition</p>
    </div>
  );
}

function AnimationDemo({ animation }: { animation: string }) {
  const [key, setKey] = useState(0);

  return (
    <div>
      <div key={key} className={`bg-accent w-full h-16 rounded-button ${animation}`} />
      <button
        onClick={() => setKey((k) => k + 1)}
        className="mt-4 text-small text-accent hover:text-accent-hover transition-colors duration-normal"
      >
        Replay Animation
      </button>
    </div>
  );
}