"use strict";
import axios from "axios";

class HTTPRequest {
  constructor(options) {
    this._options = options;
  }

  send() {
    const {
        hostname,
        path,
        method = "GET",
        headers = {},
        data = "",
        secure = false,
      } = this._options,
      isGET = method === "GET";

    return new Promise((resolve, reject) => {
      const url = `${hostname}${path}`;

      axios({
        method,
        headers,
        url,
        data,
      })
        .then((response) => resolve(response))
        .catch((error) => reject(error));
    });
  }

  onError(callback) {
    return ({ error }) => callback(error);
  }

  onResponse(callback) {
    let rawData = "";
    const onResponseData = (chunk) => (rawData += chunk),
      onRequestEnd = (response) => () => callback({ response, rawData });

    return (response) => {
      response.on("data", onResponseData);
      response.on("end", onRequestEnd(response));
    };
  }
}

export default HTTPRequest;
