import React, { useState, useEffect } from "react";

const clientId = "5012b99bc5384012a9b77e50d955c3b6";
const clientSecret = "dfb1f61bdbb7494e80ac84cc8aa7d484";

function AuthorizeUser({ receiveAccessToken }) {
  // const [accessToken, setAccessToken] = useState("");
  useEffect(() => {
    var authParameters = {
      method: "POST",
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
      },
      body:
        "grant_type=client_credentials&client_id=" +
        clientId +
        "&client_secret=" +
        clientSecret,
    };
    fetch("https://accounts.spotify.com/api/token", authParameters)
      .then((result) => result.json())
      .then((data) => {
        receiveAccessToken(data.access_token);
        console.log(`${data.access_token} gotten from Spotify Token`);
      });
  }, []);
}

export { AuthorizeUser, clientId, clientSecret };

//error handling has not been done.
