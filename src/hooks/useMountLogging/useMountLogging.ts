import { useEffect } from "react";

export function useMountLogging(displayName?: string) {
  const finalName = displayName || "Unnamed";

  useEffect(() => {
    console.log(`${finalName}: Mounted`);

    return () => {
      console.log(`${finalName}: Unmounted`);
    };
  }, []);
}

export default useMountLogging;