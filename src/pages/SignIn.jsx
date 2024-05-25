import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SignInUser from "../components/SignIn/SignInUser";

function SignIn(props) {
  return (
    <div>
      <Header />
      <SignInUser />
      <Footer />
    </div>
  );
}

export default SignIn;
