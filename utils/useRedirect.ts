import { readCookie } from "./useCookie";
import Router from "next/router";

export const useRedirect = () => {
  const pathname = Router.asPath;
  const pathArray = pathname.split("-");
  const pathLevel = pathArray["1"];

  const cookieData = readCookie();

  if (Router.asPath !== "/admin") {
    if (cookieData && cookieData.level) {
      if (Number(pathLevel) !== cookieData.level + 1) {
        const newPath = `/quest-${cookieData.level + 1}`;
        Router.push(newPath);
      }
    }
  }
};
