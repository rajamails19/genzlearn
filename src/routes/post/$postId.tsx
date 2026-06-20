import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Bookmark, Heart, Send, Sparkles, Clock, Zap, Brain, Eye } from "lucide-react";
import { useState } from "react";
import fTransformer from "@/assets/feed-transformer.jpg";

export const Route = createFileRoute("/post/$postId")({
  head: () => ({
    meta: [
      { title: "Attention is all you need — visualised · Lumen" },
      {
        name: "description",
        content:
          "Why the transformer ate deep learning. A visual tour of Q, K, V and the magic of self-attention.",
      },
    ],
  }),
  component: ArticlePage,
});

/* ── article data (will be dynamic later) ── */

const article = {
  id: "1",
  tag: "Transformers",
  author: "founded.ai",
  time: "1h",
  readMins: 4,
  title: "Attention is all you need — visualised.",
  subtitle:
    "Why the transformer ate deep learning. A 60-second tour of Q, K, V and the magic of self-attention.",
  heroImg: fTransformer,
  likes: "12.4k",
};

/* ── page ── */

function ArticlePage() {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <div className="min-h-screen">
      {/* sticky top bar */}
      <header className="sticky top-0 z-30 glass border-b border-white/40 px-4 py-3 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 text-sm font-semibold hover:text-primary transition"
        >
          <ArrowLeft className="size-5" />
          <span className="hidden sm:inline">Back to feed</span>
        </Link>
        <div className="flex items-center gap-2">
          <Sparkles className="size-5 text-primary" />
          <span
            className="text-lg font-bold tracking-tight bg-clip-text text-transparent dream-gradient"
            style={{ WebkitBackgroundClip: "text" }}
          >
            Lumen
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => setLiked(!liked)} className="hover:scale-110 transition">
            <Heart
              className={`size-6 ${liked ? "fill-rose-500 text-rose-500" : ""}`}
              strokeWidth={1.8}
            />
          </button>
          <button onClick={() => setSaved(!saved)} className="hover:scale-110 transition">
            <Bookmark
              className={`size-6 ${saved ? "fill-primary text-primary" : ""}`}
              strokeWidth={1.8}
            />
          </button>
        </div>
      </header>

      {/* hero */}
      <div className="relative w-full max-h-[55vh] overflow-hidden">
        <img
          src={article.heroImg}
          alt={article.title}
          className="w-full object-cover max-h-[55vh]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 text-white max-w-3xl mx-auto">
          <span className="text-[11px] uppercase tracking-widest opacity-70 font-semibold">
            #{article.tag}
          </span>
          <h1 className="mt-2 text-3xl sm:text-5xl font-extrabold leading-tight drop-shadow">
            {article.title}
          </h1>
          <p className="mt-3 text-sm sm:text-base opacity-80 max-w-xl">{article.subtitle}</p>
          <div className="mt-4 flex items-center gap-4 text-xs opacity-70">
            <span className="font-semibold">{article.author}</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock className="size-3" /> {article.readMins} min read
            </span>
            <span>·</span>
            <span>{article.likes} learners</span>
          </div>
        </div>
      </div>

      {/* article body */}
      <div className="max-w-2xl mx-auto px-5 sm:px-8 py-10 space-y-10">
        {/* TL;DR pill */}
        <div className="glass-strong rounded-3xl p-5 shadow-soft border border-white/50">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">TL;DR</p>
          <p className="text-sm leading-relaxed text-foreground/80">
            Transformers replaced RNNs by letting every word look at every other word{" "}
            <span className="font-semibold text-foreground">at the same time</span>. The trick?
            Three tiny matrices — <span className="font-semibold">Q, K, V</span> — that turn a
            sentence into a smart attention map. That's literally it. The rest is just math and
            scale.
          </p>
        </div>

        {/* section 1 */}
        <section>
          <SectionLabel icon={Brain} label="The old world" />
          <h2 className="text-2xl font-extrabold mt-2 mb-3">
            RNNs were reading one word at a time. That was the problem.
          </h2>
          <p className="text-base leading-relaxed text-foreground/80">
            Before 2017, the go-to architecture for language was the RNN — Recurrent Neural Network.
            Imagine reading a book but you're only allowed to look at one word, remember something
            about it, and move to the next. By the time you reach word 500 you've basically
            forgotten word 1.
          </p>
          <p className="mt-4 text-base leading-relaxed text-foreground/80">
            That's called the{" "}
            <span className="font-semibold text-foreground">vanishing gradient problem</span>. Long
            dependencies — like a pronoun referring to a noun from 20 sentences ago — were nearly
            impossible to learn. LSTMs helped a bit, but they were still sequential. Slow. And
            parallelism was a dream.
          </p>

          <Callout emoji="💡">
            Sequential = you can't parallelize. No parallelism = GPUs are bored. Bored GPUs = slow
            training = sad AI researcher.
          </Callout>
        </section>

        {/* section 2 */}
        <section>
          <SectionLabel icon={Zap} label="The 2017 paper" />
          <h2 className="text-2xl font-extrabold mt-2 mb-3">
            "Attention Is All You Need" — the paper that changed everything.
          </h2>
          <p className="text-base leading-relaxed text-foreground/80">
            In 2017, Vaswani et al. at Google dropped{" "}
            <span className="font-semibold text-foreground">Attention Is All You Need</span>. The
            title is a flex — and it delivered. Their idea:{" "}
            <span className="font-semibold text-foreground">
              what if every word could attend to every other word simultaneously?
            </span>{" "}
            No sequential steps. Pure parallel attention.
          </p>
          <p className="mt-4 text-base leading-relaxed text-foreground/80">
            The mechanism they used was called{" "}
            <span className="font-semibold text-foreground">Scaled Dot-Product Attention</span>,
            powered by three learnable matrices: <strong>Q</strong> (Query), <strong>K</strong>{" "}
            (Key), and <strong>V</strong> (Value).
          </p>
        </section>

        {/* QKV explainer cards */}
        <section>
          <SectionLabel icon={Eye} label="The magic" />
          <h2 className="text-2xl font-extrabold mt-2 mb-5">Q, K, V — explained with a vibe.</h2>

          <div className="space-y-4">
            <QKVCard
              letter="Q"
              color="from-violet-400 to-fuchsia-400"
              label="Query"
              analogy="What am I looking for?"
              explain="Each word generates a Query — a vector that says 'I'm trying to find context about THIS.' Like googling. You type your search intent."
            />
            <QKVCard
              letter="K"
              color="from-pink-400 to-rose-400"
              label="Key"
              analogy="What do I have to offer?"
              explain="Every word also generates a Key — a vector that says 'here's what I'm about.' Like a database row's index. It gets compared against Queries to compute relevance."
            />
            <QKVCard
              letter="V"
              color="from-amber-400 to-orange-400"
              label="Value"
              analogy="My actual content."
              explain="The Value is the payload — the real information. Once we know which words are relevant (via Q·K scores), we pull their Values and mix them together. That's your attention output."
            />
          </div>
        </section>

        {/* attention formula */}
        <section className="glass-strong rounded-3xl p-6 shadow-soft">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
            The formula
          </p>
          <div className="bg-black/10 rounded-2xl p-4 font-mono text-sm sm:text-base text-center leading-loose">
            Attention(Q, K, V) = softmax
            <span className="text-primary font-bold">(QKᵀ / √dₖ)</span> · V
          </div>
          <p className="mt-4 text-sm leading-relaxed text-foreground/70">
            <strong>Step by step:</strong> Multiply Q × Kᵀ to get raw attention scores (how much
            each word cares about each other word). Divide by √dₖ to stop the scores from exploding.
            Apply softmax to turn them into probabilities. Multiply by V to get the weighted mix.
            Done.
          </p>
        </section>

        {/* section 3 */}
        <section>
          <h2 className="text-2xl font-extrabold mb-3">A concrete example, no fluff.</h2>
          <p className="text-base leading-relaxed text-foreground/80">
            Take the sentence: <em>"The animal didn't cross the street because it was tired."</em>
          </p>
          <p className="mt-4 text-base leading-relaxed text-foreground/80">
            What does <strong>"it"</strong> refer to? The animal or the street? You know it's the
            animal. But how? Because <em>tired</em> semantically connects to <em>animal</em>, not to{" "}
            <em>street</em>.
          </p>
          <p className="mt-4 text-base leading-relaxed text-foreground/80">
            Self-attention figures this out by letting the word <strong>"it"</strong> broadcast its
            Query and compare it against the Keys of every other word. The word{" "}
            <strong>"animal"</strong> ends up with a high attention score. So its Value gets pulled
            in heavily when representing "it". The model learns that "it" = "animal" from context —
            not from rigid rules.
          </p>

          <Callout emoji="🔥">
            This is why transformers can handle long-range dependencies that destroyed RNNs. Every
            word sees every other word. Distance doesn't matter.
          </Callout>
        </section>

        {/* section 4 — multi-head */}
        <section>
          <h2 className="text-2xl font-extrabold mb-3">
            Multi-head attention: do it 8 times at once.
          </h2>
          <p className="text-base leading-relaxed text-foreground/80">
            One attention head is cool. But language has multiple types of relationships
            simultaneously — syntactic, semantic, coreference, positional. So transformers run{" "}
            <span className="font-semibold text-foreground">
              multiple attention heads in parallel
            </span>
            , each learning a different kind of relationship.
          </p>
          <p className="mt-4 text-base leading-relaxed text-foreground/80">
            Think of it like 8 people reading the same sentence but each highlighting different
            things — one is looking at grammar, another at who's doing what to whom, another at
            emotional tone. Then they all compare notes and merge.
          </p>
          <p className="mt-4 text-base leading-relaxed text-foreground/80">
            The outputs are concatenated and projected back down. That's your final rich
            representation of the sentence.
          </p>
        </section>

        {/* section 5 — why it matters */}
        <section>
          <h2 className="text-2xl font-extrabold mb-3">
            Why this ate everything that came before it.
          </h2>
          <div className="space-y-3">
            {[
              {
                emoji: "⚡",
                point: "Fully parallelizable",
                detail:
                  "No sequential dependency. Every token's attention is computed at once. GPUs go brrr.",
              },
              {
                emoji: "🔗",
                point: "Handles long-range dependencies",
                detail:
                  "Word 1 and word 500 can directly attend to each other. Distance = irrelevant.",
              },
              {
                emoji: "📈",
                point: "Scales insanely well",
                detail:
                  "Bigger model + more data = better. This scaling law is why GPT-4, Gemini, Claude exist.",
              },
              {
                emoji: "🧩",
                point: "Works beyond text",
                detail:
                  "Vision Transformers (ViT), AlphaFold, music generation — attention generalises everywhere.",
              },
            ].map((item) => (
              <div key={item.point} className="glass rounded-2xl p-4 flex gap-4 items-start">
                <span className="text-2xl shrink-0">{item.emoji}</span>
                <div>
                  <p className="font-semibold text-sm">{item.point}</p>
                  <p className="text-sm text-foreground/70 mt-0.5">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* key takeaway */}
        <div className="dream-gradient rounded-3xl p-8 text-center shadow-soft">
          <p className="text-2xl sm:text-3xl font-serif italic leading-snug text-foreground/90">
            "Attention isn't a trick. It's a fundamental rethinking of how neural nets should
            process information."
          </p>
          <p className="mt-4 text-sm font-semibold text-foreground/60">
            — the takeaway from 50M+ citations
          </p>
        </div>

        {/* what to learn next */}
        <section>
          <h2 className="text-xl font-extrabold mb-4">What to learn next 🗺️</h2>
          <div className="space-y-3">
            {[
              {
                step: "01",
                label: "Positional Encoding",
                note: "Transformers have no sense of order by default. How do they fix that?",
              },
              {
                step: "02",
                label: "The Encoder–Decoder Stack",
                note: "The original transformer had both. GPT kept only the decoder. Why?",
              },
              {
                step: "03",
                label: "Flash Attention",
                note: "A hardware-aware rewrite of attention. Made long contexts possible.",
              },
              {
                step: "04",
                label: "Build a mini-GPT",
                note: "Karpathy's nanoGPT. 200 lines. The best way to actually get it.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 items-start glass rounded-2xl p-4">
                <span className="text-xs font-black text-primary/60 shrink-0 pt-0.5">
                  {item.step}
                </span>
                <div>
                  <p className="font-semibold text-sm">{item.label}</p>
                  <p className="text-xs text-foreground/60 mt-0.5">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* footer actions */}
        <div className="flex items-center justify-between pt-4 border-t border-white/30">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLiked(!liked)}
              className="flex items-center gap-2 text-sm font-semibold hover:text-rose-500 transition"
            >
              <Heart
                className={`size-5 ${liked ? "fill-rose-500 text-rose-500" : ""}`}
                strokeWidth={1.8}
              />
              {article.likes}
            </button>
            <button className="hover:scale-110 transition">
              <Send className="size-5" strokeWidth={1.8} />
            </button>
          </div>
          <button
            onClick={() => setSaved(!saved)}
            className="flex items-center gap-2 text-sm font-semibold hover:text-primary transition"
          >
            <Bookmark
              className={`size-5 ${saved ? "fill-primary text-primary" : ""}`}
              strokeWidth={1.8}
            />
            {saved ? "Saved" : "Save"}
          </button>
        </div>

        {/* back to feed */}
        <div className="text-center pb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full dream-gradient text-white font-semibold shadow-soft hover:opacity-90 transition"
          >
            <ArrowLeft className="size-4" />
            Back to feed
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ── small reusable bits ── */

function SectionLabel({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="size-7 rounded-lg dream-gradient grid place-items-center shadow-soft">
        <Icon className="size-3.5 text-white" />
      </div>
      <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

function Callout({ emoji, children }: { emoji: string; children: React.ReactNode }) {
  return (
    <div className="mt-5 glass rounded-2xl p-4 flex gap-3 items-start border-l-4 border-primary/50">
      <span className="text-xl shrink-0">{emoji}</span>
      <p className="text-sm leading-relaxed text-foreground/80">{children}</p>
    </div>
  );
}

function QKVCard({
  letter,
  color,
  label,
  analogy,
  explain,
}: {
  letter: string;
  color: string;
  label: string;
  analogy: string;
  explain: string;
}) {
  return (
    <div className="glass-strong rounded-2xl p-5 shadow-soft flex gap-4 items-start">
      <div
        className={`size-12 shrink-0 rounded-2xl bg-gradient-to-br ${color} grid place-items-center shadow-glow`}
      >
        <span className="text-white text-xl font-black">{letter}</span>
      </div>
      <div>
        <div className="flex items-baseline gap-2">
          <p className="font-extrabold text-base">{label}</p>
          <p className="text-xs text-muted-foreground italic">"{analogy}"</p>
        </div>
        <p className="mt-1.5 text-sm leading-relaxed text-foreground/75">{explain}</p>
      </div>
    </div>
  );
}
