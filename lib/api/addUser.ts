import RestClient from "../RestClient";
import getConfig from "next/config";

const { PBIRUST_URL } = getConfig().publicRuntimeConfig;

export const addUser = async (username: string, email: string) => {
  const addUserRequest = {
    method: "POST",
    url: `${PBIRUST_URL}/api/users/`,
  };

  const date = new Date();
  const last_submission = date.toLocaleString();

  return await RestClient(addUserRequest, {
    name: username,
    level: 0,
    email: email,
    last_submitted: last_submission,
  });
};
