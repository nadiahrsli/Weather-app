const { useState } = require("react");
const supabase = require("../utils/supabase");

function SignUp() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  function updateUserEmail(event) {
    setUserEmail(event.target.value);
  }

  function updateUserPassword(event) {
    setUserPassword(event.target.value);
  }

  function handleSignUp(event) {
    event.preventDefault();
    supabase.auth
      .signUp({
        email: userEmail,
        password: userPassword,
      })
      .then(function (data) {
        console.log(data);
      });
  }

  return (
    <div class="bg-img">
      <form onSubmit={handleSignUp} class="container">
        <p>Sign Up with Email</p>
        <input
          type="text"
          placeholder="Email"
          value={userEmail}
          onChange={updateUserEmail}
        />
        <input
          type="password"
          placeholder="Password"
          value={userPassword}
          onChange={updateUserPassword}
        />
        <input
          type="submit"
          value="Sign Up"
          onClick={handleSignUp}
          class="button"
        />
      </form>
    </div>
  );
}

module.exports = SignUp;
