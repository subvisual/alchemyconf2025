import { useState, useEffect } from "react";

export default function useScreenSize() {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(
    typeof window !== "undefined" && window.innerWidth < 640,
  );

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth < 640);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isSmallScreen;
}
