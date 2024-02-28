import { db } from "./db";

export default async function fetchFakturaQueries() {
  const queries = [
    {
      name: "Antal purringer som er ubetalt per kunde med kundenummer",
      result:
        await db.$queryRawUnsafe(`SELECT COUNT(kundenummer) AS antall_purringer, kundenummer
    FROM fakturaoversikt
    WHERE fakturaoversikt.purring > 0
      AND utestaende > 0
    GROUP BY kundenummer
    ORDER BY COUNT(kundenummer) DESC
    LIMIT 3;`),
    },
    {
      name: "Top 3 kunder basert på inntekt, med inntekten",
      result: await db.$queryRawUnsafe(`SELECT SUM(betalt), kundenummer
        FROM fakturaoversikt
        GROUP BY kundenummer, betalt
        ORDER BY SUM(betalt) DESC
        LIMIT 3;
        `),
    },
    {
      name: "Top 3 total inntekt vi har tjent per kunde med kundenummer",
      result: await db.$queryRawUnsafe(`SELECT COUNT(kundenummer), kundenummer
      FROM fakturaoversikt
      GROUP BY kundenummer
      ORDER BY COUNT(kundenummer) DESC
      LIMIT 3;
      `),
    },
    {
      name: "Top 3 laveste totale inntekt vi har tjent per kunde med kundenummer",
      result: await db.$queryRawUnsafe(`SELECT COUNT(kundenummer), kundenummer
      FROM fakturaoversikt
      GROUP BY kundenummer
      ORDER BY COUNT(kundenummer) ASC
      LIMIT 3;
      `),
    },
    {
      name: "Antall kunder som har 5 eller færre fakturaer",
      result: await db.$queryRawUnsafe(`SELECT COUNT(*)
      FROM (SELECT COUNT(*) AS customer_count
            FROM fakturaoversikt
            GROUP BY kundenummer
            HAVING COUNT(kundenummer) < 5) AS subquery;
      `),
    },
    {
      name: "Conversion rate percentage",
      result: await db.$queryRawUnsafe(`
      SELECT (SELECT COUNT(*)
              FROM (SELECT kundenummer
                    FROM fakturaoversikt
                    GROUP BY kundenummer
                    HAVING COUNT(kundenummer) > 5) AS customers_with_less_than_5_invoices)
                 ::FLOAT
                 /
             (SELECT COUNT(*) FROM (SELECT 1 FROM fakturaoversikt GROUP BY kundenummer) AS total) * 100
                 AS ratio;
      `),
    },
    {
      name: "Total inntekt",
      result: await db.$queryRawUnsafe(
        `SELECT SUM(betalt) AS total_inntekt FROM fakturaoversikt; `,
      ),
    },
    {
      name: "Antall ubetalte fakturaer i år",
      result: await db.$queryRawUnsafe(
        `SELECT COUNT(*)
        FROM fakturaoversikt
        WHERE faktura_dato LIKE '%0004%'
          AND utestaende > 0;
        `,
      ),
    },
  ];

  return queries;
}
