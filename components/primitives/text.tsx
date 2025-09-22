import { cn } from "@/lib/utils"
import { Slot } from "@radix-ui/react-slot"
import { forwardRef } from "react"

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "hero" | "heading" | "subheading" | "body-large" | "body" | "body-small" | "caption"
  font?: "ui" | "display"
  color?: "primary" | "secondary" | "muted" | "accent"
  align?: "left" | "center" | "right"
  asChild?: boolean
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div"
}

const Text = forwardRef<HTMLElement, TextProps>(
  ({
    className,
    variant = "body",
    font = "ui",
    color,
    align,
    asChild = false,
    as = "p",
    ...props
  }, ref) => {

    const variantClasses = {
      hero: "text-hero",
      heading: "text-section-heading",
      subheading: "text-subheading",
      "body-large": "text-body-large",
      body: "text-body",
      "body-small": "text-body-small",
      caption: "text-xs leading-[1.4]"
    }

    const fontClasses = {
      ui: "font-ui",
      display: "font-display"
    }

    const colorClasses = color ? {
      primary: "text-primary",
      secondary: "text-secondary",
      muted: "text-muted-foreground",
      accent: "text-accent-foreground"
    }[color] : ""

    const alignClasses = align ? {
      left: "text-left",
      center: "text-center",
      right: "text-right"
    }[align] : ""

    const Comp = asChild ? Slot : as

    return (
      <Comp
        ref={ref as any}
        className={cn(
          variantClasses[variant],
          fontClasses[font],
          colorClasses,
          alignClasses,
          className
        )}
        {...props}
      />
    )
  }
)

Text.displayName = "Text"

export { Text }