import { useState } from "react";
import "./App.css";
import { TOKEN } from "./constants";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faMedium,
//   faLinkedin,
//   faGithub,
//   faDeskpro,
// } from "@fortawesome/free-brands-svg-icons";

function Home() {
  const handleClick = () => {
    shortenUrl();
  };
  const [url, setUrl] = useState<string>("");
  const [shortenedUrl, setShortenedUrl] = useState<string>("");

  const shortenUrl = async () => {
    const input = {
      url: url,
      domain: "tinyurl.com",
      alias: "myexamplelink",
      // tags: "example,link",
      // expires_at: "2024-10-25 10:11:12",
      description: "string",
    };

    try {
      const response = await fetch(`https://api.tinyurl.com/create`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify(input),
      });
      console.log("response",response);
      // const data = await response.json();
      // setShortenedUrl(data.result.full_short_link);
    } catch (e) {
      console.log(e);

      alert(e);
    }
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const links: any = {
    0: "https://augustinejoseph.medium.com/",
    1: "https://www.linkedin.com/in/augustinjoseph/",
    2: "https://github.com/augustinejoseph",
    3: "https://augustinejoseph.github.io/",
  };
  const handleProfileClick = (number: number) => {
    const url: string = links[number];
    window.open(url);
  };
  return (
    <>
      <h1>AUGUSTINE JOSPEH</h1>
      <p></p>
      <div className="profile-links-container">
        <button onClick={() => handleProfileClick(0)} className="link-button">
          {/* <FontAwesomeIcon icon={faMedium} color="white" /> */}
          Medium
        </button>
        <button onClick={() => handleProfileClick(1)} className="link-button">
          {/* <FontAwesomeIcon icon={faLinkedin} color="white" /> */}
          LinkedIn
        </button>
        <button onClick={() => handleProfileClick(2)} className="link-button">
          {/* <FontAwesomeIcon icon={faGithub} color="white" /> */}
          GitHub
        </button>
        <button onClick={() => handleProfileClick(3)} className="link-button">
          {/* <FontAwesomeIcon icon={faDeskpro} color="white" /> */}
          Portfolio
        </button>
      </div>
      <div className="url-input-container">
        <p>Enter the url to Shorten</p>
        <input type="text" onChange={(e) => setUrl(e.target.value)} />
      </div>
      <button onClick={handleClick}>Shorten</button>
      <div className="shortened-url">
        {shortenedUrl && <p>{shortenedUrl}</p>}
      </div>
    </>
  );
}
export default Home;
