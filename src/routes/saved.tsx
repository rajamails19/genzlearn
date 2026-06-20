import { createFileRoute } from "@tanstack/react-router";
import { FolderPlus, Bookmark } from "lucide-react";
import { categories, feed } from "@/lib/data";
import { AppShell } from "@/components/AppShell";

export const Route = createFileRoute("/saved")({
  head: () => ({ meta: [{ title: "Saved · Lumen" }] }),
  component: SavedPage,
});

// Show image/reel posts as "recently saved" examples
const recentlySaved = feed.filter((p) => p.kind !== "quote") as Extract<
  (typeof feed)[number],
  { img: string; title: string }
>[];

function SavedPage() {
  return (
    <AppShell>
      <div className="max-w-xl mx-auto px-4 py-6">
        {/* header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="size-9 rounded-xl dream-gradient grid place-items-center shadow-soft">
            <Bookmark className="size-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-extrabold">Saved</h1>
            <p className="text-xs text-muted-foreground">Everything you've kept.</p>
          </div>
        </div>

        {/* folders */}
        <section className="mb-8">
          <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
            Your folders
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
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
        </section>

        {/* recently saved */}
        <section>
          <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
            Recently saved
          </h2>
          <div className="flex flex-col gap-3">
            {recentlySaved.map((p) => (
              <div
                key={p.id}
                className="glass-strong rounded-2xl overflow-hidden shadow-soft flex gap-4 items-center"
              >
                <img src={p.img} alt={p.title} className="size-20 object-cover shrink-0" />
                <div className="py-3 pr-4 min-w-0 flex-1">
                  <p className="text-[11px] text-primary font-semibold uppercase tracking-wide">
                    #{p.tag}
                  </p>
                  <p className="font-bold text-sm leading-tight mt-0.5 line-clamp-2">{p.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {p.author} · {p.likes} learners
                  </p>
                </div>
                <button className="mr-4 shrink-0">
                  <Bookmark className="size-5 fill-primary text-primary" strokeWidth={1.8} />
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </AppShell>
  );
}
