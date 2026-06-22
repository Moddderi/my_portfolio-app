import { useState, type ReactNode } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactNode;
}

export const Portal = ({ children }: PortalProps) => {
  const [mounted] = useState(() => typeof window !== "undefined");

  if (!mounted) return null;

  const container = document.getElementById("portal-root") || document.body;

  return createPortal(children, container);
};
