import axios from 'axios';
import getConfig from 'next/config';

interface RestClientConfig {
  method: any;
  url: string;
  headers?: any
}

const RestClient = async (config: RestClientConfig, data: any) => {
  let response;
  console.log(data);

  try {
    response = await axios({
      method: config.method,
      url: config.url,
      data,
    });
  } catch (err) {
    response = {
      data: null,
    };
  }

  
  
  return response && response.data;
};

export default RestClient;
