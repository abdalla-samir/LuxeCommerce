import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

function Switch({
  className,
  size = "default",
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root> & {
  size?: "sm" | "default"
}) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      data-size={size}
      className={cn(
        "peer group/switch relative inline-flex shrink-0 items-center rounded-full border border-transparent transition-all outline-none",

        "p-[2px]",

        "after:absolute after:-inset-x-3 after:-inset-y-2",
        "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
        "aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20",

        "data-[size=default]:h-[20px] data-[size=default]:w-[50px]",
        "data-[size=sm]:h-[14px] data-[size=sm]:w-[24px]",

        "dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",

        "data-[state=checked]:bg-accent",
        "data-[state=unchecked]:bg-muted",
        "dark:data-[state=unchecked]:bg-muted/80",

        "data-disabled:cursor-not-allowed data-disabled:opacity-50",

        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
  data-slot="switch-thumb"
  className={cn(
    "pointer-events-none block rounded-full ring-0 transition-transform",
    "bg-white shadow-sm",

    "group-data-[size=default]/switch:size-4",
    "group-data-[size=sm]/switch:size-3",

    "group-data-[size=default]/switch:data-[state=checked]:translate-x-[30px]",
    "group-data-[size=sm]/switch:data-[state=checked]:translate-x-[10px]",

    "group-data-[size=default]/switch:data-[state=unchecked]:translate-x-0",
    "group-data-[size=sm]/switch:data-[state=unchecked]:translate-x-0"
  )}
/>
    </SwitchPrimitive.Root>
  )
}

export { Switch }