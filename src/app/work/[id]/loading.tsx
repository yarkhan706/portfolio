import { Skeleton } from "@/components/ui/skeleton";

export default function ProjectLoading() {
  return (
    <article className="container mx-auto px-4 py-12 md:py-16 max-w-3xl">
      {/* Back */}
      <Skeleton className="h-3 w-24 mb-10" />

      {/* Title + chips */}
      <header className="mb-10">
        <Skeleton className="h-12 w-64 max-w-full mb-5" />
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-7 w-20 rounded-full" />
          ))}
        </div>
      </header>

      {/* Description lines */}
      <div className="space-y-3">
        <Skeleton className="h-6 w-80 max-w-full mb-2" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>

      {/* CTA */}
      <Skeleton className="mt-8 h-10 w-36 rounded-full" />

      {/* Screenshots */}
      <div className="mt-16 space-y-6">
        <Skeleton className="h-3 w-28" />
        {Array.from({ length: 2 }).map((_, i) => (
          <Skeleton key={i} className="aspect-[10/7] w-full rounded-xl" />
        ))}
      </div>
    </article>
  );
}
