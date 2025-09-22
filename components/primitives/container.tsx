import { cn } from "@/lib/utils"
import { forwardRef } from "react"

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl" | "full"
  centered?: boolean
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = "lg", centered = true, ...props }, ref) => {
    const sizeClasses = {
      sm: "max-w-3xl",
      md: "max-w-4xl",
      lg: "max-w-6xl",
      xl: "max-w-7xl",
      full: "max-w-[1280px]"
    }

    return (
      <div
        ref={ref}
        className={cn(
          "w-full px-4 sm:px-6 lg:px-8",
          centered && "mx-auto",
          sizeClasses[size],
          className
        )}
        {...props}
      />
    )
  }
)

Container.displayName = "Container"

export { Container }