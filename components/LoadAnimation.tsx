"use client"

import { useEffect, useRef } from "react"

import styles from "./LoadAnimation.module.css"

export default function LoadAnimation() {
  const leftRef = useRef<HTMLDivElement>()
  const rightRef = useRef<HTMLDivElement>()
  const logoRef = useRef<HTMLImageElement>()

  useEffect(() => {
    if (leftRef.current && rightRef.current) {
      setTimeout(() => {
        leftRef.current.classList.add(styles.visible)
        rightRef.current.classList.add(styles.visible)
      }, 500)
      setTimeout(() => {
        logoRef.current.classList.add(styles.pinned)
      }, 1000)
      setTimeout(() => {
        leftRef.current.classList.add("hidden")
        rightRef.current.classList.add("hidden")
      }, 2000)
    }
  }, [leftRef, rightRef])

  return <>
    <div ref={leftRef} className={`${styles.gtLoaderBackground} ${styles.left}`} />
    <div ref={rightRef} className={`${styles.gtLoaderBackground} ${styles.right}`} />
    <img ref={logoRef} src="/seal.jpg" className={styles.gtLogo} />
  </>
}