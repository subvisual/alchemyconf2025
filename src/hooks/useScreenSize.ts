import { useState, useEffect } from "react";

export enum ScreenSize {
  Small = "SMALL",
  Normal = "NORMAL",
}

export default function useScreenSize() {
  const [screenSize, setScreenSize] = useState<ScreenSize | null>(null);

  useEffect(() => {
    function handleResize() {
      setScreenSize(
        window.innerWidth < 640 ? ScreenSize.Small : ScreenSize.Normal,
      );
    }

    handleResize(); // Set initial size
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
}
