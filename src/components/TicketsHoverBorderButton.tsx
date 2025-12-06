"use client";

import React from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export function TicketsHoverBorderButton() {
  return (
    <div className="flex justify-center">
      <HoverBorderGradient
        as="button"
        duration={2} // slower rotation, tweak if you want
        containerClassName="rounded-md" // outer shape
        className="
          relative flex h-12 w-56 items-center justify-center
          rounded-md px-0 text-[16px] font-medium text-white
          bg-[radial-gradient(50%_50%_at_50%_50%,#841403_0%,#841403_100%)]
          shadow-[inset_0_-4px_2px_rgba(0,0,0,0.25),_inset_0_2px_1px_rgba(255,255,255,0.25)]
        "
      >
        Get your tickets
      </HoverBorderGradient>
    </div>
  );
}
