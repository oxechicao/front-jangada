import { DateTime } from "luxon";

export default function DateTimeComponent({
  date,
  format = "date",
}: {
  date: Date;
  format?: "locale" | "date" | "datetime" | "time";
}) {
  const zone = "America/Fortaleza";
  const locale = "pt-BR";

  const dateTime = DateTime.fromJSDate(date).setZone(zone).setLocale(locale);

  switch (format) {
    case "date":
      return <>{dateTime.toLocaleString(DateTime.DATE_SHORT)}</>;
    case "time":
      return <>{dateTime.toLocaleString(DateTime.TIME_SIMPLE)}</>;
    case "datetime":
      return <>{dateTime.toLocaleString(DateTime.DATETIME_SHORT)} </>;
    case "locale":
      return <>{dateTime.toLocaleString(DateTime.DATETIME_FULL)}</>;
    default:
      return <>{dateTime.toISO()}</>;
  }
}
