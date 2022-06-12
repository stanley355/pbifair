import RestClient from "../RestClient";
import getConfig from "next/config";

const { PBIRUST_URL } = getConfig().publicRuntimeConfig;

export const getAllUser = async () => {
  const addUserRequest = {
    method: "GET",
    url: `${PBIRUST_URL}/api/users/`,
  };

  return await RestClient(addUserRequest, {});
};
