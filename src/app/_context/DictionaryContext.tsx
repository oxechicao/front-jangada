"use client";

import React from "react";

type EmptyObject = Record<string, never>;

type Dictionary = Record<string, {}>;

interface DictionaryContextType {
  dictionary: Dictionary;
}

export const DictionaryContext = React.createContext<
  DictionaryContextType | EmptyObject
>({});

interface DicitionaryProviderProps extends DictionaryContextType {
  children: React.ReactNode;
}
export function DictionaryProvider(props: DicitionaryProviderProps) {
  const { dictionary, children } = props;

  return (
    <DictionaryContext.Provider value={{ dictionary }}>
      {children}
    </DictionaryContext.Provider>
  );
}
