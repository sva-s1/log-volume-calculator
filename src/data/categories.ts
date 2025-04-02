// src/data/categories.ts
import type { Category } from "../types/Device"; // or a separate `Category.ts` if you prefer

export const initialCategories: Category[] = [
  {
    id: "infrastructure",
    name: "Infrastructure",
    devices: [
      {
        id: "windowsHigh",
        name: "Windows Servers - HIGH EPS (Event Log)",
        quantity: 1,
        eps: 7, // default
        gbPerDay: 0, // will be calculated
      },
      {
        id: "windowsMed",
        name: "Windows Servers - MED EPS (Event Log)",
        quantity: 1,
        eps: 3,
        gbPerDay: 0,
      },
      {
        id: "windowsLow",
        name: "Windows Servers - LOW EPS (Event Log)",
        quantity: 1,
        eps: 1,
        gbPerDay: 0,
      },
    ],
  },
  // Potentially other categories here (Security, Network, Endpoints) ...
];
