import Cookies from "js-cookie";

interface CookieInterface {
  name: string;
  email: string;
  level: number;
}

export const createCookie = (data: CookieInterface) => {
  Cookies.set("name", data.name);
  Cookies.set("email", data.email);
  Cookies.set("level", data.level.toString());

  const name = Cookies.get("name");
  const email = Cookies.get("email");
  const level = Cookies.get("level");

  return {
    name,
    email,
    level: Number(level),
  };
};

export const updateCookie = (newLevel: number) => {
  Cookies.set("level", newLevel.toString());

  const name = Cookies.get("name");
  const email = Cookies.get("email");
  const level = Cookies.get("level");

  return {
    name,
    email,
    level: Number(level),
  };
};

export const readCookie = () => {
  const name = Cookies.get("name");
  const email = Cookies.get("email");
  const level = Cookies.get("level");

  return {
    name,
    email,
    level: level ? Number(level) : null,
  };
};
