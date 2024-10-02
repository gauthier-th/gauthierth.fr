"use client"

import type { ComponentProps } from "react"

export type SmoothLinkProps = {
  destId: string;
} & ComponentProps<"a">

export default function SmoothLink({ destId, children, ...props }: SmoothLinkProps) {
  return (
    <a
      href={destId ? "#" + destId : ""}
      onClick={(e) => {
        e.preventDefault()
        window.scrollTo({
          top: destId ? document.getElementById(destId).getBoundingClientRect().top + window.scrollY : 0,
          behavior: "smooth",
        })
        const url = new URL(window.location.toString())
        url.hash = destId
        history.pushState({}, "", url)
      }}
      {...props}
    >
      {children}
    </a>
  )
}