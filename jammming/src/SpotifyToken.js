import React, { useState, useEffect } from "react";

const GetSpotifyToken = () => {
  const clientId = "5012b99bc5384012a9b77e50d955c3b6";
  const clientSecret = "dfb1f61bdbb7494e80ac84cc8aa7d484";
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    var authenticationParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=client_credentials&client_id ${clientId} client_secret=${clientSecret}`,
    };
    fetch("https://accounts.spotify.com/api/token", authenticationParameters)
      .then((result) => result.json)
      .then((data) => setAccessToken(data));
  }, []);

  return <button onClick={() => console.log(accessToken)}>Print token</button>;
};

export { GetSpotifyToken };
