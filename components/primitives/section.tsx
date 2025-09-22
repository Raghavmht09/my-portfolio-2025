import { cn } from "@/lib/utils"
import { forwardRef } from "react"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: "sm" | "md" | "lg" | "xl" | "custom"
  background?: "transparent" | "muted" | "surface" | "primary"
  as?: "section" | "div" | "article" | "aside"
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({
    className,
    spacing = "lg",
    background = "transparent",
    as = "section",
    ...props
  }, ref) => {

    const spacingClasses = {
      sm: "py-8 md:py-12",
      md: "py-12 md:py-16 lg:py-20",
      lg: "py-16 md:py-20 lg:py-24 xl:py-32",
      xl: "py-20 md:py-24 lg:py-32 xl:py-40",
      custom: ""
    }

    const backgroundClasses = {
      transparent: "bg-transparent",
      muted: "bg-muted/30",
      surface: "bg-surface",
      primary: "bg-primary/5"
    }

    const Component = as

    return (
      <Component
        ref={ref as any}
        className={cn(
          "relative w-full",
          spacingClasses[spacing],
          backgroundClasses[background],
          className
        )}
        {...props}
      />
    )
  }
)

Section.displayName = "Section"

export { Section }