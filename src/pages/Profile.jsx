import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ProfileUser from "../components/ProfileUser/ProfileUser";

function Profile(props) {
  return (
    <div>
      <Header />
      <ProfileUser />
      <Footer />
    </div>
  );
}

export default Profile;
