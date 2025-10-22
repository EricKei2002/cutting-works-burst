import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type IdleHandle = number;

type ExtendedWindow = Window &
  Partial<{
    requestIdleCallback: (callback: IdleRequestCallback) => IdleHandle;
    cancelIdleCallback: (handle: IdleHandle) => void;
  }>;

type IdleCleanup = () => void;

export function scheduleIdle(callback: () => void): IdleCleanup | undefined {
  if (typeof window === "undefined") {
    return undefined;
  }

  const idleWindow = window as ExtendedWindow;

  if (idleWindow.requestIdleCallback) {
    const handle = idleWindow.requestIdleCallback(() => {
      callback();
    });

    return () => {
      idleWindow.cancelIdleCallback?.(handle);
    };
  }

  const timeout = window.setTimeout(() => {
    callback();
  }, 0);

  return () => {
    window.clearTimeout(timeout);
  };
}
