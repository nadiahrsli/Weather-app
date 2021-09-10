const { useState, useEffect } = require("react");
const SignUp = require("./signUp");
const supabase = require("../utils/supabase");

function Home() {
  const [session, setSession] = useState(null);

  useEffect(function () {
    setSession(supabase.auth.session());
    supabase.auth.onAuthStateChange(function (event, supaSession) {
      setSession(supaSession);
    });
  }, []);

  let markup = <SignUp />; //By default, assume user are logged out
  // If user logged in means there is a session
  if (session) {
    let email = session.user.email;
    markup = (
      <div>
        <h4>Thank you for Signing Up! :)</h4>
        <h4>Confirmation email has been sent to {email}</h4>
      </div>
    );
  }

  return (
    <div>
      {markup}
      <SignUp />
    </div>
  );
}

module.exports = Home;
