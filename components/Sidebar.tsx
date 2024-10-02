"use client"

import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom";
import Link from "next/link";
import { RiCloseLargeFill, RiHeartFill, RiMenuFill } from "react-icons/ri"

export default function Sidebar({ children }: { children: JSX.Element }) {
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [typeof window])

  return <>
    <button
      className="sm:hidden mx-3 p-2"
      onClick={() => setIsOpen(true)}
    >
      <RiMenuFill className="text-3xl" />
    </button>
    {mounted && createPortal(
      <div
        className={`${isOpen ? "block" : "hidden"} z-40 fixed inset-0 w-screen h-screen bg-black/70`}
        onClick={() => setIsOpen(false)}
      />,
      document.body,
    )}
    {mounted && createPortal(
      <div
        className={`fixed top-0 z-50 w-72 -right-72 ${isOpen ? "-translate-x-72" : "translate-x-0"} h-screen flex justify-center bg-zinc-950 transition-transform`}
      >
        <div className="w-screen max-w-72 flex flex-col">
          <div className="flex justify-end items-center h-16 border-b border-gray-600/80">
            <button
              className="sm:hidden mx-3 p-2"
              onClick={() => setIsOpen(false)}
            >
              <RiCloseLargeFill className="text-3xl" />
            </button>
          </div>
          {children}
          <Link
            href="https://github.com/gauthier-th/gauthierth.fr"
            target="_blank"
            className="mt-auto mb-8 flex flex-col items-center text-sm text-center"
          >
            <span className="flex items-center">Developed and designed with <RiHeartFill className="mx-1" /> by me.</span>
            <span>Built with Next.js and TailwindCSS.</span>
          </Link>
        </div>
      </div>,
      document.body,
    )}
  </>
}