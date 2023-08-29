"use client"

import { Store } from "@prisma/client"

import { PopoverTrigger } from "@/components/ui/popover"

type PopoverTriggerProps = React.ComponentPropsWithoutRef<typeof PopoverTrigger>

interface StoreSwitcherProps extends PopoverTriggerProps {
  items: Store[];
}

export default function StoreSwitcher({
  className,
  items = []
}: StoreSwitcherProps) {
  return (
    <div>
      Store Switcher
    </div>
  )
}