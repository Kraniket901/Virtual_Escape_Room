import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Page6a = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/page6", {
      state: {
        auth: true,
      },
    });
  };

  const location = useLocation();
  useEffect(() => {
    if (!location.state || !location.state.auth) {
      navigate("/");
    }
  }, []);

  const [fadeIn, setFadeIn] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={`fade-in-panel2 bg p3 ${fadeIn ? "fade-in" : ""}`}>
        <button onClick={handleClick} style={{position:"absolute", bottom:"30%"}}>Go Back</button>
      </div>
    </>
  );
};

export default Page6a;