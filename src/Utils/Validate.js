export const checkValidData = (name, email, password) => {
  const isEmailValid = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email);
  const isPasswordValid =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

  // const isNameValid = /^[a-zA-Z ]{2,30}$/.test(name);

  if (!isEmailValid) return "Email invalid";
  if (!isPasswordValid) return "Password invalid";
  // if (!isNameValid) return "Name invalid";

  return null;
};
