import { Session } from "../types";

/**
 * Generates an .ics file content for a given session and triggers a download.
 */
export const downloadIcsFile = (session: Session) => {
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toISOString().replace(/-|:|\.\d+/g, "");
  };

  const start = formatDate(session.startTime);
  const end = formatDate(session.endTime);
  
  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//EventPilot AI//EN",
    "BEGIN:VEVENT",
    `UID:${session.id}@eventpilot.ai`,
    `DTSTAMP:${formatDate(new Date().toISOString())}`,
    `DTSTART:${start}`,
    `DTEND:${end}`,
    `SUMMARY:${session.title}`,
    `DESCRIPTION:${session.description.replace(/\n/g, "\\n")}`,
    `LOCATION:${session.roomId}`,
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", `${session.title.replace(/\s+/g, "_")}.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

/**
 * Generates an .ics file containing all saved sessions.
 */
export const downloadAllIcsFile = (sessions: Session[]) => {
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toISOString().replace(/-|:|\.\d+/g, "");
  };

  const icsEvents = sessions.map(session => {
    const start = formatDate(session.startTime);
    const end = formatDate(session.endTime);
    return [
      "BEGIN:VEVENT",
      `UID:${session.id}@eventpilot.ai`,
      `DTSTAMP:${formatDate(new Date().toISOString())}`,
      `DTSTART:${start}`,
      `DTEND:${end}`,
      `SUMMARY:${session.title}`,
      `DESCRIPTION:${session.description.replace(/\n/g, "\\n")}`,
      `LOCATION:${session.roomId}`,
      "END:VEVENT"
    ].join("\r\n");
  }).join("\r\n");

  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//EventPilot AI//EN",
    icsEvents,
    "END:VCALENDAR"
  ].join("\r\n");

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", `EventPilot_Full_Agenda.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
