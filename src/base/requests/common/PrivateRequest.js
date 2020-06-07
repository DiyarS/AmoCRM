'use strict';
import axios from "axios";

class PrivateRequest {
  constructor( options ) {
    this._options = options;
  }

  send() {
    const {
        hostname,
        path,
        method = 'GET',
        headers = {},
        data = '',
        form,
        secure = false
      } = this._options,
  
    return new Promise(( resolve, reject ) => {
      const url = `${hostname}${path}`;

      axios({
        method,
        headers,
        url,
        data,
      }).then((response) => resolve(response)).catch((error) => reject(error));

      if ( form ) {
        form.pipe( request );
      }
    });
  }

  onError( callback ) {
    return ({ error }) => callback( error );
  }

  onResponse( callback ) {
    let rawData = '';
    const onResponseData = chunk => { rawData += chunk; console.log( chunk )},
      onRequestEnd = response => () => callback({ response, rawData });

    return response => {
      response.on( 'data', onResponseData );
      response.on( 'end', onRequestEnd( response ));
    };
  }

}

export default HTTPRequest;
