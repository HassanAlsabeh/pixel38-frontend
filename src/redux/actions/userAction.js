import urlAxios from "../../apis/axiosApi";
import { ActionTypes } from "../contants/action-types";
import Swal from "sweetalert2";

export const loginuser = (items, navigate) => {
  console.log("hahahahahha", items);
  return async function (dispatch) {
    try {
      const response = await urlAxios.post("/login", items, {
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      });
      const data = response.data;

      if (data.success) {
        localStorage.setItem("token", data.access_token);
        localStorage.setItem("id", data.data.id);
        debugger;
        dispatch({ type: ActionTypes.LOGINUSERS, payload: data.data });
        navigate("/");
        Swal.fire("Good job!", "Logged in successfully", "success");
      }
    } catch (err) {
      if (err.response) {
        console.log(err.response.message);
      }
      console.log(err.message);

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Wrong Username or Password login!   Try Again",
      });
    }
  };
};

export const registerusers = (object, navigate) => {
  return async function (dispatch) {
    try {
      const response = await urlAxios.post("/register", object, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const data = response.data;
      console.log("helooooooooooooo", response);
      if (data.success) {
        navigate("/login");
        dispatch({
          type: ActionTypes.REGISTERUSERS,
          payload: data.data,
        });
        alert("Successfully Registered");
      }
    } catch (err) {
      if (err.response && err.response.status === 422) {
        alert(err.response.data.errors.email[0]);
      }
    }
  };
};

// export const logoutUser = async (navigation) => {
//   try {
//     await AsyncStorage.removeItem("token");
//     navigation.navigate("Home");
//   } catch (err) {
//     console.log(err);
//   }
// };
