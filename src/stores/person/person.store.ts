import { create } from "zustand";

interface State {
  firstName: string;
  lastName: string;
}

interface Actions {
  setFirstName: (value: State["firstName"]) => void;
  setLastName: (value: State["lastName"]) => void;
}

export const usePersonStore = create<State & Actions>()((set) => ({
  firstName: "",
  lastName: "",

  setFirstName: (value: State["firstName"]) => set({ firstName: value }),
  setLastName: (value: State["lastName"]) => set({ lastName: value }),
}));
