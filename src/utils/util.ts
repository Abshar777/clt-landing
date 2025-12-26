export function minutesLeftUntilJan30_2026(): number {
    const now = new Date(); // current date & time
    const targetDate = new Date("2026-01-30T00:00:00"); // Jan 30, 2026
  
    const diffMs = targetDate.getTime() - now.getTime();
    const diffMinutes = Math.floor(diffMs / (1000 * 60));
  
    return diffMinutes;
  }

 export const detectCountry = async () => {
    try {
      const res = await fetch("https://ipapi.co/json/");
      const data = await res.json();
      console.log("data", data?.country_calling_code);
      return data?.country_calling_code; // e.g. "IN", "AE"
    } catch {
      return "+971"; // fallback
    }
  };
