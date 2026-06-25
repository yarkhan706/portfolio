"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

type Props = ImageProps & {
  /** Extra classes for the wrapping frame */
  wrapperClassName?: string;
};

/**
 * Next.js Image that reveals only once loaded, with a shimmer skeleton
 * behind it in the meantime. The frame keeps its size so layout never jumps.
 */
export function ImageWithSkeleton({
  className,
  wrapperClassName,
  alt,
  onLoad,
  ...props
}: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={cn("relative", wrapperClassName)}>
      {!loaded && (
        <div className="skeleton absolute inset-0 bg-gray-100" aria-hidden />
      )}
      <Image
        alt={alt}
        className={cn(
          "transition-opacity duration-500 ease-out",
          loaded ? "opacity-100" : "opacity-0",
          className
        )}
        onLoad={(e) => {
          setLoaded(true);
          onLoad?.(e);
        }}
        {...props}
      />
    </div>
  );
}
