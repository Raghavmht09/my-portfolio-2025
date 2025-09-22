import { cn } from "@/lib/utils"
import { forwardRef } from "react"

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 6 | 12
  gap?: "xs" | "sm" | "md" | "lg" | "xl"
  responsive?: boolean
}

const Grid = forwardRef<HTMLDivElement, GridProps>(
  ({ className, cols = 12, gap = "md", responsive = true, ...props }, ref) => {
    const colClasses = {
      1: "grid-cols-1",
      2: "grid-cols-2",
      3: "grid-cols-3",
      4: "grid-cols-4",
      6: "grid-cols-6",
      12: "grid-cols-12"
    }

    const gapClasses = {
      xs: "gap-2",
      sm: "gap-4",
      md: "gap-6",
      lg: "gap-8",
      xl: "gap-12"
    }

    const responsiveClasses = responsive ? {
      1: "grid-cols-1",
      2: "grid-cols-1 md:grid-cols-2",
      3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
      6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
      12: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-12"
    } : colClasses

    return (
      <div
        ref={ref}
        className={cn(
          "grid",
          responsive ? responsiveClasses[cols] : colClasses[cols],
          gapClasses[gap],
          className
        )}
        {...props}
      />
    )
  }
)

Grid.displayName = "Grid"

export { Grid }