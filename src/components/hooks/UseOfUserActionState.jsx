import React from "react";
import { useActionState } from "react";

const registerUser = async (previousStateData, fromData) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const email = fromData.get("email");

  if (!email.includes("@")) {
    return { success: false, message: "Invalid email address." };
  }

  return { success: true, message: "User registered successfully." };
};

const UseOfUserActionState = () => {
  const [state, formAction, isPending] = useActionState(registerUser, null);
  return (
    <>
      <form action={formAction}>
        <input name="email" type="text" placeholder="Enter your email" />

        <button type="submit" disabled={isPending}>
          {isPending ? "Submitting.." : "Submit"}
        </button>
      </form>

      {state && state.message && (
        <p style={{ color: state.success ? "green" : "red" }}>
          {state.message}
        </p>
      )}
    </>
  );
};

export default UseOfUserActionState;
