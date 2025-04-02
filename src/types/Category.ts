// src/types/Category.ts
import type { Device } from "./Device";

export interface Category {
  id: string;
  name: string;
  devices: Device[];
}
