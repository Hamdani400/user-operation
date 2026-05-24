"use client";

import { createContext, useContext, useState } from "react";

import { SortType } from "@/types/user";

interface ContextType {
  search: string;

  setSearch: (value: string) => void;

  sortBy: SortType;

  setSortBy: (value: SortType) => void;
}

const UsersFilterContext = createContext<ContextType | undefined>(undefined);

export function UsersFilterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [search, setSearch] = useState("");

  const [sortBy, setSortBy] = useState<SortType>("name-asc");

  return (
    <UsersFilterContext.Provider
      value={{
        search,
        setSearch,
        sortBy,
        setSortBy,
      }}
    >
      {children}
    </UsersFilterContext.Provider>
  );
}

export function useUsersFilter() {
  const context = useContext(UsersFilterContext);

  if (!context) {
    throw new Error("useUsersFilter must be used within UsersFilterProvider");
  }

  return context;
}
