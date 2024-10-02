"use client"

import React, { useEffect, useRef } from "react"
import styles from "./StarsBackground.module.css"

export default function StarsBackground() {
  const starsEl = useRef(null)

  useEffect(() => {
    if (starsEl.current) {
      loadStars(starsEl.current)
      loadStars(starsEl.current)
      loadStars(starsEl.current)
    }
  }, [starsEl])

  return <div className="opacity-75" ref={starsEl} />
}

function genShootingStar(container: HTMLElement) {
  container.classList.add(styles.starsAnimationContainer)
  const starContainer = document.createElement("div")
  starContainer.classList.add(styles.shootingStarContainer)
  const star = document.createElement("div")
  star.classList.add(styles.shootingStar)
  starContainer.appendChild(star)
  const showTime = RandomInt(0.5, 2) + RandomInt(0.5, 5)
  starContainer.style.animationDuration = showTime + "s"
  starContainer.style.transform = "translateX(" + RandomInt(-window.innerHeight, window.innerWidth) + "px)"
  container.appendChild(starContainer)
  setTimeout(() => {
    container.removeChild(starContainer)
  }, showTime * 1000)
}

function loadStars(container: HTMLElement) {
  genShootingStar(container)
  setTimeout(loadStars, (RandomInt(250, 1500) + RandomInt(250, 750)), container)
}

function RandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}