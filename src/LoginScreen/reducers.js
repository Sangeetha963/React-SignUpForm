// reducer.js
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  DOB: "",
  gender: "",
  password: "",
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case "STORE_NAME":
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        phoneNumber: action.payload.phoneNumber,
        DOB: action.payload.DOB,
        gender: action.payload.gender,
        password: action.payload.password,
      };
    default:
      return state;
  }
};

export default formReducer;
