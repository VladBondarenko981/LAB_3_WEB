import "./App.css";
import About from "./pages/About";
import MainForm from "./pages/MainForm";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";

function App() {
  const [info, setInfo] = useState({
    postId: [],
    postName: [],
    post: [],
    postPhoto: [],
  });

  async function createPost(postName, post, postPhoto, id) {
    try {
      // Отправляем запрос на сервер для создания поста
      const requestData = {
        method: "POST",
        body: JSON.stringify({
          postName,
          post,
          postPhoto,
          id,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await fetch(
        "http://localhost:3001/api/createPost",
        requestData
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log(info);
      setInfo((prevInfo) => ({
        ...prevInfo,
        postName: data.posts,
        post: data.postDescriptions,
        postPhoto: data.postPhotoUrls,
      }));
      console.log(info);

      return data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }

  async function deletePost(id) {
    try {
      // Отправляем запрос на сервер для создания поста
      const requestData = {
        method: "POST",
        body: JSON.stringify({
          id,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await fetch(
        "http://localhost:3001/api/deletePost",
        requestData
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();

      return data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }

  return (
    <div className="App">
      <Routes>
        <Route
          path="/home"
          element={
            <MainForm
              Info={info}
              createPost={createPost}
              deletePost={deletePost}
            />
          }
        />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/myProfile" element={<Profile />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
