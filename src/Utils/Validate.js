export const checkValidData = (name, email, password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  const isNameValid = /^[a-zA-Z ]{2,30}$/.test(name);

  if (!isEmailValid) return "Email invalid";
  if (!isPasswordValid) return "Password invalid";
  if (!isNameValid) return "Name invalid";

  return null;
};
