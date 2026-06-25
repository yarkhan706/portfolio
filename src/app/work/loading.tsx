import { Skeleton } from "@/components/ui/skeleton";

export default function WorkLoading() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      {/* Header */}
      <header className="mb-12 md:mb-16">
        <Skeleton className="h-3 w-28 mb-4" />
        <Skeleton className="h-12 w-72 max-w-full mb-4" />
        <Skeleton className="h-4 w-full max-w-md" />
      </header>

      {/* Grid */}
      <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i}>
            <Skeleton className="aspect-[4/3] w-full rounded-xl" />
            <div className="mt-4 space-y-2">
              <Skeleton className="h-5 w-32" />
              <Skeleton className="h-3 w-40" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
