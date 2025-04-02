// src/types/Device.ts
export interface Device {
  id: string; // unique identifier
  name: string; // e.g. "Windows Servers - High EPS"
  quantity: number; // how many of this device
  eps: number; // events per second (user input or slider)
  gbPerDay: number; // derived from eps * quantity (calculated)
}

// src/types/Category.ts
import { Device } from "./Device";

export interface Category {
  id: string; // e.g. "infrastructure"
  name: string; // e.g. "Infrastructure"
  devices: Device[];
}
