import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./bootstrap.min.css";
import Auth from "./auth/Auth";
import "./App.css";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import React, { useState } from "react";
import MyPage from "./routes/MyPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Home />} />
        {/* 프로그램 별로 가지고 있는 id를 Detail 컴포넌트에게 전달 */}
        <Route path="/prog/:id" element={<Detail />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
