import RestClient from "../RestClient";
import getConfig from "next/config";

const { PBIRUST_URL } = getConfig().publicRuntimeConfig;

export const updateUser = async (
  username: string | undefined,
  level: number | undefined
) => {
  const addUserRequest = {
    method: "PUT",
    url: `${PBIRUST_URL}/api/users/`,
  };

  const date = new Date();
  const last_submission = date.toLocaleString();

  return await RestClient(addUserRequest, {
    name: username,
    level: level,
    last_submitted: last_submission,
  });
};
