import { useEffect } from "react";

/** Sets document.title; updates whenever `title` changes (e.g. language switch). */
const useDocTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

export { useDocTitle };
