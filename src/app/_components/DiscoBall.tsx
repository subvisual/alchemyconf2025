"use client";

import useScreenSize from "@/hooks/useScreenSize";
import { AnimationDiscoBall } from "@/utils/disco_ball_animation";
import { useEffect } from "react";

export function DiscoBall() {
  const isSmallScreen = useScreenSize();
  const size = isSmallScreen ? 167 : 324;

  useEffect(() => {
    AnimationDiscoBall(size);
  }, [size]);

  return (
    <div className="rounded-full bg-background">
      <div
        style={{ width: `${size}px`, height: `${size}px` }}
        id="discoBall"
      ></div>
    </div>
  );
}
