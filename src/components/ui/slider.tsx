import * as React from "react"
import { Slider as SliderPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) {
  const _values = React.useMemo(
    () =>
      Array.isArray(value)
        ? value
        : Array.isArray(defaultValue)
          ? defaultValue
          : [min, max],
    [value, defaultValue, min, max]
  )

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(
        "relative flex w-full touch-none items-center select-none data-disabled:opacity-50",
        className
      )}
      {...props}
    >
      {/* Track (background line) */}
      <SliderPrimitive.Track
        data-slot="slider-track"
        className="relative grow overflow-hidden rounded-full bg-gray-200 h-1"
      >
        {/* Filled range */}
        <SliderPrimitive.Range
          data-slot="slider-range"
          className="absolute h-full select-none"
          style={{ backgroundColor: "#ba0035" }}
        />
      </SliderPrimitive.Track>

      {/* Thumb(s) */}
      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          key={index}
          className="block size-3 shrink-0 rounded-full bg-white border transition-transform duration-150 hover:scale-110 active:scale-125 focus-visible:outline-none "
          style={{ borderColor: "#ba0035", cursor: "pointer" }}
        />
      ))}
    </SliderPrimitive.Root>
  )
}

export { Slider }