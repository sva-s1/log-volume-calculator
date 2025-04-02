interface LogParams {
  deviceCount: number;
  deviceType: string;
  logSeverity: string;
  retentionDays: number;
}

// A simple example formula (replace with your real-world logic)
export function calculateLogVolume(params: LogParams) {
  const { deviceCount, deviceType, logSeverity, retentionDays } = params;

  // Example baseline values (these should be refined based on real-world data)
  let epsBaseline = 50; // events per second baseline
  let severityFactor =
    logSeverity === "high" ? 1.5 : logSeverity === "low" ? 0.8 : 1.0;
  let deviceTypeFactor =
    deviceType === "firewall" ? 1.2 : deviceType === "router" ? 1.1 : 1.0;

  // Estimate EPS based on device count, severity, and type
  const eps = deviceCount * epsBaseline * severityFactor * deviceTypeFactor;

  // Convert EPS to total events per day
  const eventsPerDay = eps * 86400; // 86400 seconds in a day

  // Estimate size per event (varies widely, e.g., 0.5 KB)
  const averageEventSizeKB = 0.5;
  const sizePerDayMB = (eventsPerDay * averageEventSizeKB) / 1024;
  const sizePerDayGB = sizePerDayMB / 1024;

  // Retention-based total
  const totalGB = sizePerDayGB * retentionDays;

  return {
    eps,
    sizePerDayGB,
    totalGB,
  };
}
