import axios from "axios";

export function requestHttp(method, url, actionSucess, actionError, dataToPost, headers) {
  axios({
    method,
    url,
    data: dataToPost,
    headers
  }).then(
    (result) => {
      actionSucess(result)
    }
  ).catch(
    (error) => {
      actionError(error)
    }
  )
}
