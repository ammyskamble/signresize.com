export interface ApplicationWindow {
  id: string; title: string; label: string; opensOn: string; closesOn: string;
  closingTime: string | null; toolUrl: string; sourceUrl: string; verifiedOn: string;
}
export function istDay(now: Date): string {
  return new Date(now.getTime() + 330 * 60_000).toISOString().slice(0, 10);
}
export function activeApplications(items: ApplicationWindow[], now: Date) {
  const today = istDay(now);
  return items.filter(item => item.opensOn <= today && today <= item.closesOn
    && (!item.closingTime || now.getTime() < Date.parse(`${item.closesOn}T${item.closingTime}+05:30`)))
    .sort((a, b) => a.closesOn.localeCompare(b.closesOn));
}
export function daysUntilClose(item: ApplicationWindow, now: Date) {
  return Math.round((Date.parse(`${item.closesOn}T00:00:00Z`) - Date.parse(`${istDay(now)}T00:00:00Z`)) / 86_400_000);
}
