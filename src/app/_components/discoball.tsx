"use client";

import { AnimationDiscoBall } from "@/utils/animation_discoball";
import { useEffect } from "react";

export function DiscoBall() {
  useEffect(() => AnimationDiscoBall(), []);

  return (
    <>
      <div className="relative">
        <div id="discoBallLight"></div>
        <div id="discoBall"></div>
      </div>
    </>
  );
}
