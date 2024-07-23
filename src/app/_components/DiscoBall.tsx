"use client";

import useScreenSize, { ScreenSize } from "@/hooks/useScreenSize";
import { AnimationDiscoBall } from "@/utils/disco_ball_animation";
import { useEffect } from "react";

export function DiscoBall() {
  const screenSize = useScreenSize();

  const size = screenSize === ScreenSize.Small ? 167 : 324;

  useEffect(() => {
    if (screenSize !== null) {
      AnimationDiscoBall(size);
    }
  }, [size, screenSize]);

  if (screenSize === null) {
    // Render nothing until we know the screen size
    return null;
  }

  return (
    <div className="rounded-full bg-background">
      <div
        style={{ width: `${size}px`, height: `${size}px` }}
        id={"discoBall"}
      ></div>
    </div>
  );
}
