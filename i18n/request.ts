import path from "path";
import { routing } from "./routing";
import { hasLocale } from "next-intl";
import { readdir, readFile } from "fs/promises";
import { getRequestConfig } from "next-intl/server";

async function getMessages(locale: string) {
  const messagesPath = path.join(
    process.cwd(),
    "public",
    "messages",
    locale,
  );
  const files = await readdir(messagesPath);

  const messages = await Promise.all(
    files.filter((file) => file.endsWith(".json")).map(async (file) => {
      const filePath = path.join(messagesPath, file);
      const content = await readFile(filePath, "utf-8");
      return JSON.parse(content);
    })
  );

  return Object.assign({}, ...messages);
};

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;
 
  return {
    locale,
    messages: await getMessages(locale)
  };
});
