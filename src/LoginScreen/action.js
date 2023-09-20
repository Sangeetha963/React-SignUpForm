// actions.js
export const storeName = (
  firstName,
  lastName,
  email,
  phoneNumber,
  DOB,
  gender,
  password
) => {
  return {
    type: "STORE_NAME",
    payload: {
      firstName,
      lastName,
      email,
      phoneNumber,
      DOB,
      gender,
      password,
    },
  };
};
