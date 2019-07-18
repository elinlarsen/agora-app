import axios from "axios";
console.log("AJAX Handler initialized");

class ajaxHandler {
  constructor(baseUrl, endpoint) {
    this.BASE_URL = baseUrl;
    this.instance = axios.create({
      baseURL: this.BASE_URL,
      withCredentials: false
    });
    this.endpoint = endpoint;
    this.result = null;
  }

  getAll(clbk, expandItem) {
    console.log(
      "endpoint for get all is " + `this.endpoint/?expand=${expandItem}`
    );
    this.instance
      .get(`${this.endpoint}/?expand=${expandItem}`)
      .then(serverRes => clbk(serverRes.data))
      .catch(serverErr => console.log("No data retrieved--------", serverErr));
  }

  getOne(id, clbk, expandItem) {
    //console.log(`contacting endpoint ${this.endpoint}/${id}`);
    this.instance
      .get(`${this.endpoint}/${id}/?expand=${expandItem}`)
      .then(serverRes => {
        clbk(serverRes.data);
      })
      .catch(serverErr =>
        console.log(
          "ajaxhandler getOne function error : ERROR WHILE GETTING ONE DATA : ",
          serverErr
        )
      );
  }

  createOne(data, clbk) {
    this.instance
      .post(
        this.endpoint,
        data
        //{headers: {'Content-Type': 'multipart/form-data'}}
      )
      .then(serverRes => {
        clbk(serverRes.data);
        console.log("serverRes.data createOne ------", serverRes.data);
      })
      .catch(serverErr => console.log("no data created", serverErr));
  }

  deleteOne(id, clbk1, clbk2) {
    this.instance
      .delete(`${this.endpoint}/${id}`)
      .then(serverRes => clbk1(serverRes))
      .catch(serverErr => {
        console.log("No data deleted --------", serverErr);
        //clbk2();
      });
  }

  updateOne(id, data, clbk) {
    this.instance
      .patch(`${this.endpoint}/${id}`, data)
      .then(serverRes => clbk(serverRes.data))
      .catch(serverErr => console.log("No data patched ----", serverErr));
  }
}

export default ajaxHandler;
