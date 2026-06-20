import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Home,
  Compass,
  Film,
  Search,
  Heart,
  PlusSquare,
  Bookmark,
  MessageCircle,
  Send,
  MoreHorizontal,
  Play,
  Volume2,
  Sparkles,
  Folder,
  FolderPlus,
  BookOpen,
  Code2,
  Brain,
  Cpu,
  Wand2,
  Layers,
  ChevronRight,
  Menu,
} from "lucide-react";

import mascot from "@/assets/mascot.png";
import tNeural from "@/assets/topic-neural.jpg";
import tLlm from "@/assets/topic-llm.jpg";
import tVision from "@/assets/topic-vision.jpg";
import tRl from "@/assets/topic-rl.jpg";
import tPrompt from "@/assets/topic-prompt.jpg";
import tMlops from "@/assets/topic-mlops.jpg";
import fTransformer from "@/assets/feed-transformer.jpg";
import fBrain from "@/assets/feed-brain.jpg";
import fGpu from "@/assets/feed-gpu.jpg";
import fEmbed from "@/assets/feed-embed.jpg";
import fLibrary from "@/assets/feed-library.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lumen — Scroll. Learn. Build AI." },
      {
        name: "description",
        content:
          "An Instagram-style hub for learning AI engineering. Stories, reels, papers, prompts — a dreamy feed for curious minds.",
      },
      { property: "og:title", content: "Lumen — Scroll. Learn. Build AI." },
      {
        property: "og:description",
        content: "Stories, reels, papers, prompts — a dreamy feed for AI engineers in the making.",
      },
    ],
  }),
  component: Index,
});

/* ---------------- data ---------------- */

const topics = [
  { name: "Neural Nets", img: tNeural, live: true },
  { name: "LLMs", img: tLlm },
  { name: "Vision", img: tVision },
  { name: "RL", img: tRl },
  { name: "Prompting", img: tPrompt },
  { name: "MLOps", img: tMlops },
  { name: "Agents", img: tNeural },
  { name: "Diffusion", img: tVision },
  { name: "RAG", img: tLlm },
];

type Post =
  | {
      kind: "image";
      id: string;
      author: string;
      time: string;
      img: string;
      title: string;
      caption: string;
      tag: string;
      likes: string;
      articleId?: string;
    }
  | {
      kind: "reel";
      id: string;
      author: string;
      time: string;
      img: string;
      title: string;
      caption: string;
      tag: string;
      likes: string;
      duration: string;
    }
  | {
      kind: "quote";
      id: string;
      author: string;
      time: string;
      quote: string;
      by: string;
      tag: string;
      likes: string;
    }
  | {
      kind: "carousel";
      id: string;
      author: string;
      time: string;
      img: string;
      title: string;
      caption: string;
      tag: string;
      likes: string;
      slides: number;
    };

const feed: Post[] = [
  {
    kind: "image",
    id: "1",
    author: "founded.ai",
    time: "1h",
    img: fTransformer,
    tag: "Transformers",
    title: "Attention is all you need — visualised.",
    caption:
      "Why the transformer ate deep learning. A 60-second tour of Q, K, V and the magic of self-attention.",
    likes: "12.4k",
    articleId: "1",
  },
  {
    kind: "reel",
    id: "2",
    author: "lumen.daily",
    time: "2h",
    img: fBrain,
    tag: "Foundations",
    duration: "0:47",
    title: "How a neural net actually learns",
    caption: "Backprop, but make it cinematic. Save this before your next interview.",
    likes: "8.1k",
  },
  {
    kind: "quote",
    id: "3",
    author: "@karpathy",
    time: "3h",
    quote: "The hottest new programming language is English.",
    by: "Andrej Karpathy",
    tag: "Prompting",
    likes: "44k",
  },
  {
    kind: "carousel",
    id: "4",
    author: "paperdrop",
    time: "5h",
    img: fGpu,
    tag: "Hardware",
    slides: 7,
    title: "Inside a single H100 — swipe →",
    caption:
      "From SMs to HBM3. Everything you need to know about the chip running half the internet.",
    likes: "21.7k",
  },
  {
    kind: "image",
    id: "5",
    author: "vector.club",
    time: "8h",
    img: fEmbed,
    tag: "Embeddings",
    title: "What does ‘king − man + woman’ look like?",
    caption: "Embeddings are vibes encoded as numbers. Here's how to feel them in 3D.",
    likes: "6.3k",
  },
  {
    kind: "reel",
    id: "6",
    author: "lumen.daily",
    time: "12h",
    img: fLibrary,
    tag: "Reading list",
    duration: "1:12",
    title: "5 papers that built modern AI",
    caption: "If you only read five — read these. Saved in the Library category for you.",
    likes: "15.9k",
  },
];

const categories = [
  { name: "Saved", icon: Bookmark, color: "from-pink-300 to-rose-300", count: 124 },
  { name: "Papers", icon: BookOpen, color: "from-violet-300 to-fuchsia-300", count: 38 },
  { name: "Snippets", icon: Code2, color: "from-amber-200 to-pink-300", count: 56 },
  { name: "Models", icon: Cpu, color: "from-rose-300 to-orange-300", count: 17 },
  { name: "Prompts", icon: Wand2, color: "from-purple-300 to-pink-300", count: 92 },
  { name: "Brain food", icon: Brain, color: "from-fuchsia-300 to-violet-300", count: 41 },
];

const nav = [
  { name: "Feed", icon: Home, active: true },
  { name: "Reels", icon: Film },
  { name: "Explore", icon: Compass },
  { name: "Search", icon: Search },
  { name: "Saved", icon: Heart },
  { name: "Create", icon: PlusSquare },
];

/* ---------------- page ---------------- */

function Index() {
  return (
    <div className="min-h-screen text-foreground">
      {/* desktop sidebar */}
      <LeftRail />
      {/* main column */}
      <main className="lg:ml-20 xl:ml-64 xl:mr-80 pb-24 lg:pb-10">
        <TopBar />
        <StoriesRail />
        <Feed />
      </main>
      {/* right categories */}
      <RightCategories />
      {/* mobile bottom nav */}
      <BottomNav />
    </div>
  );
}

/* ---------------- left rail (desktop) ---------------- */

function LeftRail() {
  return (
    <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-20 xl:w-64 flex-col gap-2 px-3 xl:px-5 py-6 glass border-r border-white/40 z-30">
      <div className="flex items-center gap-3 px-2 mb-6">
        <div className="story-ring shrink-0">
          <div className="size-10 rounded-full overflow-hidden bg-white grid place-items-center">
            <Sparkles className="size-5 text-primary" />
          </div>
        </div>
        <span
          className="hidden xl:block text-2xl font-bold tracking-tight bg-clip-text text-transparent dream-gradient"
          style={{ WebkitBackgroundClip: "text" }}
        >
          Lumen
        </span>
      </div>

      <nav className="flex flex-col gap-1">
        {nav.map((n) => (
          <button
            key={n.name}
            className={`group flex items-center gap-4 rounded-2xl px-3 py-3 transition-all hover:bg-white/60 ${
              n.active ? "bg-white/70 shadow-soft" : ""
            }`}
          >
            <n.icon
              className={`size-6 shrink-0 ${n.active ? "text-primary" : "text-foreground/80"} group-hover:scale-110 transition`}
              strokeWidth={n.active ? 2.4 : 1.8}
            />
            <span
              className={`hidden xl:block text-[15px] ${n.active ? "font-semibold" : "font-medium"}`}
            >
              {n.name}
            </span>
          </button>
        ))}
      </nav>

      <div className="mt-auto">
        <div className="glass-strong rounded-3xl p-4 shadow-soft hidden xl:block">
          <div className="flex items-center gap-3">
            <img
              src={mascot}
              alt="Lumen mascot"
              className="size-12 rounded-full ring-2 ring-white"
              width={48}
              height={48}
            />
            <div className="min-w-0">
              <p className="text-sm font-semibold truncate">Hey, learner ✨</p>
              <p className="text-xs text-muted-foreground truncate">12 streak · 3 saves today</p>
            </div>
          </div>
        </div>
        <div className="xl:hidden flex justify-center">
          <img
            src={mascot}
            alt="Lumen mascot"
            className="size-10 rounded-full ring-2 ring-white"
            width={40}
            height={40}
          />
        </div>
      </div>
    </aside>
  );
}

/* ---------------- top bar (mobile only) ---------------- */

function TopBar() {
  return (
    <header className="lg:hidden sticky top-0 z-30 glass border-b border-white/40 px-5 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Sparkles className="size-6 text-primary" />
        <span
          className="text-2xl font-bold tracking-tight bg-clip-text text-transparent dream-gradient"
          style={{ WebkitBackgroundClip: "text" }}
        >
          Lumen
        </span>
      </div>
      <div className="flex items-center gap-3">
        <Heart className="size-6" />
        <Send className="size-6" />
      </div>
    </header>
  );
}

/* ---------------- stories rail ---------------- */

function StoriesRail() {
  return (
    <section className="sticky top-0 lg:top-0 z-20">
      <div className="glass border-b border-white/40 px-4 lg:px-8 py-4">
        <div className="flex gap-4 overflow-x-auto scrollbar-none">
          {/* your topic */}
          <button className="flex flex-col items-center gap-1.5 shrink-0">
            <div className="relative">
              <div className="size-16 rounded-full glass-strong grid place-items-center shadow-soft">
                <img
                  src={mascot}
                  alt="you"
                  className="size-14 rounded-full"
                  width={56}
                  height={56}
                />
              </div>
              <span className="absolute -bottom-1 -right-1 size-6 rounded-full dream-gradient grid place-items-center text-white text-sm font-bold ring-2 ring-white">
                +
              </span>
            </div>
            <span className="text-[11px] text-muted-foreground">Your path</span>
          </button>

          {topics.map((t) => (
            <button key={t.name} className="flex flex-col items-center gap-1.5 shrink-0 group">
              <div className="story-ring group-hover:scale-105 transition">
                <div className="size-16 rounded-full bg-white p-0.5 relative overflow-hidden">
                  <img
                    src={t.img}
                    alt={t.name}
                    loading="lazy"
                    className="size-full rounded-full object-cover"
                    width={64}
                    height={64}
                  />
                  {t.live && (
                    <span
                      className="absolute -bottom-0 left-1/2 -translate-x-1/2 translate-y-1 px-2 py-0.5 rounded-md text-[10px] font-bold text-white"
                      style={{ background: "oklch(0.65 0.22 25)" }}
                    >
                      LIVE
                    </span>
                  )}
                </div>
              </div>
              <span className="text-[11px] font-medium max-w-16 truncate">{t.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- feed ---------------- */

function Feed() {
  return (
    <div className="mx-auto max-w-[480px] lg:max-w-[520px] px-3 sm:px-0 py-6 flex flex-col gap-8">
      {feed.map((p) => (
        <PostCard key={p.id} post={p} />
      ))}
      <EndOfFeed />
    </div>
  );
}

function PostCard({ post }: { post: Post }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <article className="glass-strong rounded-3xl shadow-soft overflow-hidden">
      {/* header */}
      <header className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3">
        <div className="flex min-w-0 items-center gap-3">
          <div className="story-ring shrink-0">
            <div className="size-9 rounded-full bg-white grid place-items-center text-xs font-bold text-primary">
              {post.author.slice(0, 2).toUpperCase()}
            </div>
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold truncate">
              {post.author} <span className="text-primary">·</span>{" "}
              <span className="font-normal text-muted-foreground">{post.time}</span>
            </p>
            <p className="text-[11px] text-muted-foreground truncate">#{post.tag}</p>
          </div>
        </div>
        <button className="size-8 grid place-items-center rounded-full hover:bg-white/60">
          <MoreHorizontal className="size-5" />
        </button>
      </header>

      {/* body */}
      {post.kind === "quote" ? (
        <div className="dream-gradient mx-3 mb-3 rounded-2xl p-8 text-center shadow-soft">
          <p className="text-2xl sm:text-3xl font-serif italic leading-snug text-foreground/90">
            “{post.quote}”
          </p>
          <p className="mt-4 text-sm font-semibold text-foreground/70">— {post.by}</p>
        </div>
      ) : (
        <div className="relative mx-3 mb-3 overflow-hidden rounded-2xl shadow-soft group">
          <img
            src={post.img}
            alt={post.title}
            loading="lazy"
            className="w-full aspect-[4/5] object-cover"
            width={768}
            height={1024}
          />
          {/* gradient title overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          {"articleId" in post && post.articleId ? (
            <Link
              to="/post/$postId"
              params={{ postId: post.articleId }}
              target="_blank"
              className="absolute bottom-0 left-0 right-0 p-5 text-white group/link"
            >
              <p className="text-[11px] uppercase tracking-widest opacity-80">#{post.tag}</p>
              <h2 className="mt-1 text-xl sm:text-2xl font-extrabold leading-tight drop-shadow group-hover/link:underline underline-offset-2">
                {post.title}
              </h2>
            </Link>
          ) : (
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
              <p className="text-[11px] uppercase tracking-widest opacity-80">#{post.tag}</p>
              <h2 className="mt-1 text-xl sm:text-2xl font-extrabold leading-tight drop-shadow">
                {post.title}
              </h2>
            </div>
          )}

          {/* reel badge */}
          {post.kind === "reel" && (
            <>
              <button className="absolute inset-0 grid place-items-center">
                <span className="size-16 rounded-full glass-strong grid place-items-center shadow-glow animate-float">
                  <Play className="size-7 text-primary fill-primary" />
                </span>
              </button>
              <span className="absolute top-3 left-3 flex items-center gap-1 px-2 py-1 rounded-full glass text-[11px] font-semibold">
                <Film className="size-3" /> {post.duration}
              </span>
              <span className="absolute top-3 right-3 size-8 rounded-full glass grid place-items-center">
                <Volume2 className="size-4" />
              </span>
            </>
          )}

          {post.kind === "carousel" && (
            <>
              <span className="absolute top-3 right-3 px-2 py-1 rounded-full glass text-[11px] font-semibold flex items-center gap-1">
                <Layers className="size-3" /> 1/{post.slides}
              </span>
              <button className="absolute right-3 top-1/2 -translate-y-1/2 size-9 rounded-full glass-strong grid place-items-center shadow-soft">
                <ChevronRight className="size-5" />
              </button>
            </>
          )}
        </div>
      )}

      {/* actions */}
      <div className="px-4 pb-4">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
          <div className="flex items-center gap-4">
            <button onClick={() => setLiked(!liked)} className="transition hover:scale-110">
              <Heart
                className={`size-7 ${liked ? "fill-rose-500 text-rose-500" : ""}`}
                strokeWidth={1.8}
              />
            </button>
            <button className="hover:scale-110 transition">
              <MessageCircle className="size-7" strokeWidth={1.8} />
            </button>
            <button className="hover:scale-110 transition">
              <Send className="size-7" strokeWidth={1.8} />
            </button>
          </div>
          <button onClick={() => setSaved(!saved)} className="hover:scale-110 transition">
            <Bookmark
              className={`size-7 ${saved ? "fill-primary text-primary" : ""}`}
              strokeWidth={1.8}
            />
          </button>
        </div>

        <p className="mt-3 text-sm font-semibold">
          {post.kind === "quote" ? `${post.likes} resonated` : `${post.likes} learners`}
        </p>
        {post.kind !== "quote" && (
          <p className="mt-1 text-sm leading-relaxed">
            <span className="font-semibold">{post.author}</span>{" "}
            <span className="text-foreground/80">{post.caption}</span>
          </p>
        )}

        {/* quick-save row */}
        {saved && (
          <div className="mt-3 glass rounded-2xl p-3 flex items-center gap-2 overflow-x-auto scrollbar-none">
            <span className="text-xs font-semibold pr-1 shrink-0">Save to →</span>
            {categories.slice(0, 5).map((c) => (
              <button
                key={c.name}
                className={`shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-br ${c.color} shadow-soft`}
              >
                <c.icon className="size-3.5" /> {c.name}
              </button>
            ))}
            <button className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold glass-strong">
              <FolderPlus className="size-3.5" /> New
            </button>
          </div>
        )}
      </div>
    </article>
  );
}

function EndOfFeed() {
  return (
    <div className="text-center py-10">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong shadow-soft">
        <Sparkles className="size-4 text-primary animate-pulse" />
        <span className="text-sm font-medium">Brewing more for you…</span>
      </div>
    </div>
  );
}

/* ---------------- right categories (desktop) ---------------- */

function RightCategories() {
  return (
    <aside className="hidden xl:flex fixed right-0 top-0 h-screen w-80 flex-col gap-4 px-5 py-6 glass border-l border-white/40 z-20 overflow-y-auto">
      <div>
        <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
          Your folders
        </h3>
        <p className="text-sm text-foreground/70 mt-1">Tap to drop any post in.</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {categories.map((c) => (
          <button
            key={c.name}
            className="group glass-strong rounded-2xl p-4 text-left shadow-soft hover:-translate-y-0.5 transition"
          >
            <div
              className={`size-10 rounded-xl bg-gradient-to-br ${c.color} grid place-items-center shadow-glow mb-3`}
            >
              <c.icon className="size-5 text-white" />
            </div>
            <p className="text-sm font-semibold">{c.name}</p>
            <p className="text-[11px] text-muted-foreground">{c.count} items</p>
          </button>
        ))}
        <button className="rounded-2xl p-4 text-left border-2 border-dashed border-primary/40 hover:border-primary transition flex flex-col items-start justify-center gap-2">
          <div className="size-10 rounded-xl glass grid place-items-center">
            <FolderPlus className="size-5 text-primary" />
          </div>
          <p className="text-sm font-semibold text-primary">New folder</p>
        </button>
      </div>

      <div className="mt-4 glass-strong rounded-3xl p-5 shadow-soft relative overflow-hidden">
        <div className="absolute -right-6 -top-6 size-32 dream-gradient rounded-full blur-2xl opacity-70" />
        <div className="relative">
          <img
            src={mascot}
            alt=""
            className="size-16 rounded-2xl mb-3 animate-float"
            width={64}
            height={64}
          />
          <p className="text-base font-bold leading-tight">Your daily AI snack 🍡</p>
          <p className="text-xs text-muted-foreground mt-1">
            3-min read · Transformers, explained like you’re 12.
          </p>
          <button className="mt-3 w-full py-2 rounded-xl text-white font-semibold dream-gradient shadow-soft">
            Open today’s drop
          </button>
        </div>
      </div>

      <div className="glass rounded-2xl p-4">
        <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
          Trending now
        </h4>
        <ul className="text-sm space-y-1.5">
          {["#mixture-of-experts", "#flash-attention-3", "#agentic-rag", "#world-models"].map(
            (t) => (
              <li key={t}>
                <a className="hover:text-primary font-medium" href="#">
                  {t}
                </a>
              </li>
            ),
          )}
        </ul>
      </div>
    </aside>
  );
}

/* ---------------- mobile bottom nav ---------------- */

function BottomNav() {
  return (
    <nav className="lg:hidden fixed bottom-0 inset-x-0 z-30 glass-strong border-t border-white/40 px-4 py-2 grid grid-cols-5 gap-1">
      {[Home, Compass, PlusSquare, Film, Bookmark].map((Icon, i) => (
        <button
          key={i}
          className={`flex flex-col items-center gap-0.5 py-2 rounded-2xl ${i === 0 ? "text-primary" : "text-foreground/70"}`}
        >
          {i === 2 ? (
            <span className="size-10 rounded-2xl dream-gradient grid place-items-center shadow-glow -mt-4">
              <Icon className="size-5 text-white" />
            </span>
          ) : (
            <Icon className="size-6" strokeWidth={i === 0 ? 2.4 : 1.8} />
          )}
        </button>
      ))}
    </nav>
  );
}
