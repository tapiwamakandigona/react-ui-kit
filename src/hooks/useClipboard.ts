import { useState, useCallback } from "react";

/**
 * Copy text to clipboard with success feedback.
 * 
 * @example
 * const { copy, copied } = useClipboard();
 * <button onClick={() => copy("text")}>{copied ? "Copied!" : "Copy"}</button>
 */
export function useClipboard(resetDelay = 2000) {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), resetDelay);
      return true;
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), resetDelay);
      return true;
    }
  }, [resetDelay]);

  return { copy, copied };
}
