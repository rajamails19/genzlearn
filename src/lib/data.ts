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

export const topics = [
  {
    name: "Neural Nets",
    img: tNeural,
    live: true,
    slug: "neural-nets",
    desc: "Backprop, activations, layers — the foundation of everything.",
  },
  {
    name: "LLMs",
    img: tLlm,
    slug: "llms",
    desc: "Large language models, tokenization, scaling laws.",
  },
  {
    name: "Vision",
    img: tVision,
    slug: "vision",
    desc: "CNNs, ViTs, diffusion — teaching machines to see.",
  },
  {
    name: "RL",
    img: tRl,
    slug: "rl",
    desc: "Reward signals, policies, agents that learn by doing.",
  },
  {
    name: "Prompting",
    img: tPrompt,
    slug: "prompting",
    desc: "Chain-of-thought, few-shot, system prompts that actually work.",
  },
  {
    name: "MLOps",
    img: tMlops,
    slug: "mlops",
    desc: "Deployment, monitoring, CI/CD for models in production.",
  },
  {
    name: "Agents",
    img: tNeural,
    slug: "agents",
    desc: "Tool use, memory, multi-agent systems — AI that acts.",
  },
  {
    name: "Diffusion",
    img: tVision,
    slug: "diffusion",
    desc: "Stable Diffusion, DALL·E, how noise becomes art.",
  },
  {
    name: "RAG",
    img: tLlm,
    slug: "rag",
    desc: "Retrieval-Augmented Generation — grounding LLMs in facts.",
  },
];

export type Post =
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

export const feed: Post[] = [
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
    title: "What does 'king − man + woman' look like?",
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

import { Bookmark, BookOpen, Code2, Brain, Cpu, Wand2 } from "lucide-react";

export const categories = [
  { name: "Saved", icon: Bookmark, color: "from-pink-300 to-rose-300", count: 124 },
  { name: "Papers", icon: BookOpen, color: "from-violet-300 to-fuchsia-300", count: 38 },
  { name: "Snippets", icon: Code2, color: "from-amber-200 to-pink-300", count: 56 },
  { name: "Models", icon: Cpu, color: "from-rose-300 to-orange-300", count: 17 },
  { name: "Prompts", icon: Wand2, color: "from-purple-300 to-pink-300", count: 92 },
  { name: "Brain food", icon: Brain, color: "from-fuchsia-300 to-violet-300", count: 41 },
];
