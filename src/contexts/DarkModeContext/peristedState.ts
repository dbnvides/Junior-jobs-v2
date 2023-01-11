import { useState, useEffect } from "react";

export const usePersistedStateDM = (key: string, initialState: any) => {
  const [state, setState] = useState(() => {
    const userTheme = localStorage.getItem(key);

    if (userTheme) {
      return JSON.parse(userTheme);
    } else {
      return initialState;
    }
  });

  localStorage.setItem(key, JSON.stringify(state));

  return [state, setState];
};
