import axios from 'axios';
import { API_URL } from './config';

export async function getHomeHotel() {
    return new Promise(async resolve => {
        const headers = {
            "Content-Type": "application/json",
          };
      await axios(API_URL+ '/home/')
        .then(response => {
          return resolve({
            success: true,
            data: response.data,
            error: null,
          });
        })
        .catch(error => {
          alert(error);
          return resolve({
            success: false,
            data: null,
            error: error.response,
          });
        });
    });
}

export async function getHotel(id) {
  return new Promise(async resolve => {
      const headers = {
          "Content-Type": "application/json",
        };
    await axios(API_URL+'/hotel/'+id)
      .then(response => {
        return resolve({
          success: true,
          data: response.data,
          error: null,
        });
      })
      .catch(error => {
        alert(error);
        return resolve({
          success: false,
          data: null,
          error: error.response,
        });
      });
  });
}

export async function getRoom(id) {
  return new Promise(async resolve => {
      const headers = {
          "Content-Type": "application/json",
        };
    await axios(API_URL+'/room/'+id)
      .then(response => {
        let data = {
          id: response.data.data.id,
          name: response.data.data.name,
          room: undefined,
        }

        for(let room of response.data.data.rooms){
          if(room.id==id){
            data.room = room;
            //alert(JSON.stringify(room));
          }
        }
        return resolve({
          success: true,
          data: data,
          error: null,
        });
      })
      .catch(error => {
        alert(error);
        return resolve({
          success: false,
          data: null,
          error: error.response,
        });
      });
  });
}

export async function search(page, text) {
  return new Promise(async resolve => {
      const headers = {
          "Content-Type": "application/json",
        };
    await axios.post(API_URL+'/home/search', {"page": page, "text": text})
      .then(response => {
        return resolve({
          success: true,
          data: response.data,
          error: null,
        });
      })
      .catch(error => {
        alert(error);
        return resolve({
          success: false,
          data: null,
          error: error.response,
        });
      });
  });
}

export async function search1(page, area, service) {
  return new Promise(async resolve => {
      const headers = {
          "Content-Type": "application/json",
        };
    await axios.post(API_URL+'/home/searchv1', {"page": page, "area": area, "service": service})
      .then(response => {
        //alert(JSON.stringify(response))
        return resolve({
          success: true,
          data: response.data,
          error: null,
        });
      })
      .catch(error => {
        alert(error);
        return resolve({
          success: false,
          data: null,
          error: error.response,
        });
      });
  });
}


export async function loginAPI(username, password) {
  return new Promise(async resolve => {
      const headers = {
          "Content-Type": "application/json",
        };

      const body={
        username: username,
        password: password
      }
    await axios.post(API_URL+"/api/auth/login", body, headers)
      .then(response => {
        //alert(JSON.stringify(response.data));
        return resolve({
          success: true,
          data: response.data,
          error: null,
        });
      })
      .catch(error => {
        alert(error);
        return resolve({
          success: false,
          data: null,
          error: error.response,
        });
      });
  });
}


export async function signupAPI(username, email, password) {
  return new Promise(async resolve => {
      const headers = {
          "Content-Type": "application/json",
        };

      const body={
        username: username,
        email: email,
        password: password
      }
    await axios.post(API_URL+"/api/auth/signup", body, headers)
      .then(response => {
        //alert(JSON.stringify(response.data));
        return resolve({
          success: true,
          data: response.data,
          error: null,
        });
      })
      .catch(error => {
        alert(error);
        return resolve({
          success: false,
          data: null,
          error: error.response,
        });
      });
  });
}

export async function getInfoByUsernameAPI(username) {
  return new Promise(async resolve => {
      const headers = {
          "Content-Type": "application/json",
        };

    await axios(API_URL+"/user/"+username)
      .then(response => {
        //alert(JSON.stringify(response.data));
        return resolve({
          success: true,
          data: response.data,
          error: null,
        });
      })
      .catch(error => {
        alert(error);
        return resolve({
          success: false,
          data: null,
          error: error.response,
        });
      });
  });
}

export async function getListRoom(userId) {
  //alert(userId);
  return new Promise(async resolve => {
      const headers = {
          "Content-Type": "application/json",
        };

        const body={
          user_id: userId
        }

    await axios.post(API_URL+"/booking/list/room", body, headers)
      .then(response => {
        //alert(JSON.stringify(response.data));
        return resolve({
          success: true,
          data: response.data,
          error: null,
        });
      })
      .catch(error => {
        alert(error);
        return resolve({
          success: false,
          data: null,
          error: error.response,
        });
      });
  });
}


export async function bookingApi(body) {
  return new Promise(async resolve => {
      const headers = {
          "Content-Type": "application/json",
        };

    await axios.post(API_URL+"/booking/add/room", body, headers)
      .then(response => {
        //alert(JSON.stringify(response.data));
        return resolve({
          success: true,
          data: response.data,
          error: null,
        });
      })
      .catch(error => {
        alert(JSON.stringify(error.response));
        return resolve({
          success: false,
          data: null,
          error: error.response,
        });
      });
  });
}


export async function statistic(id) {
  return new Promise(async resolve => {
      const headers = {
          "Content-Type": "application/json",
        };

    await axios(API_URL+"/partner/statistic/"+id)
      .then(response => {
        //alert(JSON.stringify(response.data));
        return resolve({
          success: true,
          data: response.data,
          error: null,
        });
      })
      .catch(error => {
        alert(JSON.stringify(error.response));
        return resolve({
          success: false,
          data: null,
          error: error.response,
        });
      });
  });
}


export async function detailCart(id) {
  return new Promise(async resolve => {
      const headers = {
          "Content-Type": "application/json",
        };

    await axios(API_URL+"/booking/detail/"+id)
      .then(response => {
        //alert(JSON.stringify(response.data));
        return resolve({
          success: true,
          data: response.data,
          error: null,
        });
      })
      .catch(error => {
        alert(JSON.stringify(error.response));
        return resolve({
          success: false,
          data: null,
          error: error.response,
        });
      });
  });
}


export async function cancelRoom(id) {
  return new Promise(async resolve => {
      const headers = {
          "Content-Type": "application/json",
        };

        const body ={
          reservation_id: id
        }

    await axios.post(API_URL+"/booking/cancel/room", body, headers)
      .then(response => {
        //alert(JSON.stringify(response.data));
        return resolve({
          success: true,
          data: response.data,
          error: null,
        });
      })
      .catch(error => {
        alert(JSON.stringify(error.response));
        return resolve({
          success: false,
          data: null,
          error: error.response,
        });
      });
  });
}

export async function comment(body) {
  return new Promise(async resolve => {
      const headers = {
          "Content-Type": "application/json",
        }
    await axios.post(API_URL+"/hotel/comment/add", body, headers)
      .then(response => {
        //alert(JSON.stringify(response.data));
        return resolve({
          success: true,
          data: response.data,
          error: null,
        });
      })
      .catch(error => {
        alert(JSON.stringify(error.response));
        return resolve({
          success: false,
          data: null,
          error: error.response,
        });
      });
  });
}

export async function detailComment(body) {
  return new Promise(async resolve => {
      const headers = {
          "Content-Type": "application/json",
        }
    await axios.post(API_URL+"/booking/detail/comment", body, headers)
      .then(response => {
        //alert(JSON.stringify(response.data));
        return resolve({
          success: true,
          data: response.data,
          error: null,
        });
      })
      .catch(error => {
        alert(JSON.stringify(error.response));
        return resolve({
          success: false,
          data: null,
          error: error.response,
        });
      });
  });
}


export async function listComment(id) {
  return new Promise(async resolve => {
    await axios(API_URL+"/hotel/comment/"+id)
      .then(response => {
        //alert(JSON.stringify(response.data));
        return resolve({
          success: true,
          data: response.data,
          error: null,
        });
      })
      .catch(error => {
        alert(JSON.stringify(error.response));
        return resolve({
          success: false,
          data: null,
          error: error.response,
        });
      });
  });
}