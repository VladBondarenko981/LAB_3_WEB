import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SignUpUser from "../components/SignUp/SignUpUser";

function SignUp(props) {
  return (
    <div>
      <Header />
      <SignUpUser />
      <Footer />
    </div>
  );
}

export default SignUp;
