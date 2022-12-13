import { useEffect, useState } from "react";
function ScrolltoTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);
  return (
    <>
      {show && (
        <>
          <div style={{ height: "1rem" }} />
          <button
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            style={{
              position: "fixed",
              padding: "1rem 2rem",
              fontSize: "20px",
              bottom: "40px",
              right: "40px",
              backgroundColor: "#0C9",
              color: "#fff",
              textAlign: "center",
            }}
          >
            &uarr;
          </button>
        </>
      )}
    </>
  );
}

export default ScrolltoTop;
