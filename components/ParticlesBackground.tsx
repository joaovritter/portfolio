"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

export default function ParticlesBackground() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      fpsLimit: 60,
      detectRetina: true,
      background: { color: "transparent" },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
          resize: { enable: true },
        },
        modes: {
          grab: { distance: 160, links: { opacity: 0.25 } },
        },
      },
      particles: {
        number: {
          value: 46,
          density: { enable: true, width: 900, height: 900 },
        },
        color: { value: ["#cbb89d", "#9a8a74", "#ece7e1"] },
        links: {
          enable: true,
          color: "#cbb89d",
          distance: 145,
          opacity: 0.12,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.5,
          direction: "none",
          random: true,
          straight: false,
          outModes: { default: "out" },
        },
        opacity: {
          value: { min: 0.15, max: 0.5 },
          animation: { enable: true, speed: 0.6, sync: false },
        },
        size: { value: { min: 1, max: 2.6 } },
      },
    }),
    []
  );

  if (!ready) return null;

  return (
    <Particles
      id="hero-particles"
      options={options}
      className="absolute inset-0 -z-10 h-full w-full"
    />
  );
}
