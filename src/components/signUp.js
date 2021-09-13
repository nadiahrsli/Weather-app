const { useState } = require("react");
const supabase = require("../utils/supabase");

function SignUp() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");

  function updateUserEmail(event) {
    setUserEmail(event.target.value);
  }

  function updateUserPassword(event) {
    setUserPassword(event.target.value);

    let p = event.target.value;
    if (p.length === 6) {
      setPasswordStrength("Weak Password");
    } else if (p.length > 6) {
      setPasswordStrength("Strong Password");
    } else {
      setPasswordStrength("Password should be at least 6 characters");
    }
    setUserPassword(p);
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

  function handleLogIn(event) {
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
        <h2>Sign Up with Email</h2>
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
        <p>{passwordStrength}</p>
        <input
          type="submit"
          value="Sign Up"
          onClick={handleSignUp}
          class="button"
        />
        <input
          type="submit"
          value="Log In"
          onClick={handleLogIn}
          class="button"
        />
      </form>
    </div>
  );
}

module.exports = SignUp;
