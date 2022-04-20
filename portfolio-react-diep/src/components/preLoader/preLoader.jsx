import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import "./preLoader.css";
=======
import "./PreLoader3.css";
>>>>>>> b3ce0e01216de232adeb7da06e476f2a0897af06

function PreLoader() {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(undefined);
  const [completed, setcompleted] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setData(json);
          setloading(true);

          setTimeout(() => {
            setcompleted(true);
          }, 1000);
        });
    }, 2000);
  }, []);

  return (
    <>
      {!completed ? (
        <>
          {!loading ? (
            <div className="spinner">
              <span>Loading...</span>
              <div className="half-spinner"></div>
            </div>
          ) : (
            <div className="completed">&#x2713;</div>
          )}
        </>
      ) : (
<<<<<<< HEAD
        <span></span>
=======
        <>
          <h1>Your Data</h1>
        </>
>>>>>>> b3ce0e01216de232adeb7da06e476f2a0897af06
      )}
    </>
  );
}

<<<<<<< HEAD
export default PreLoader;

=======
export default PreLoader;
>>>>>>> b3ce0e01216de232adeb7da06e476f2a0897af06
