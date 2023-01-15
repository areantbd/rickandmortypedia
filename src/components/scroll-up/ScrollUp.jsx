import "./ScrollUp.css"
import React, { useEffect, useState } from "react";

function ScrollUp() {
  const [button, setButton] = useState(null)
  useEffect(() => {    
  let mybutton = document.getElementById("btn-back-to-top");
  setButton(mybutton)
  }, [])

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  }

//   mybutton.addEventListener("click", backToTop);

  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div>
      <button
        type="button"
        className="btn btn-secondary opacity-50 btn-floating btn-sm zindex-tooltip"
        id="btn-back-to-top"
        onClick={() => backToTop()}
      >
        <i className="fa fa-arrow-up"></i>
      </button>
    </div>
  );
}

export default ScrollUp;
