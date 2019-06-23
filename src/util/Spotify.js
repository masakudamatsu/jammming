const clientID = 'a3ab6dd2b49a45c5b30ad99ef16db769';
const redirectURI = 'http://localhost:3000/';

let accessToken;

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    } else if (window.location.href.match(/access_token=([^&]*)/) && window.location.href.match(/expires_in=([^&]*)/)) {
      accessToken = window.location.href.match(/access_token=([^&]*)/)[1];
      const expiresIn = window.location.href.match(/expires_in=([^&]*)/)[1];
      window.setTimeout(() => accessToken = '', expiresIn*1000);
      window.history.pushState('Access Token', null, '/');
      return accessToken;
    } else {
      window.location = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
    }
  },
  async search(term) {
    try {
      const apiURL = `https://api.spotify.com/v1/search?q=${term}&type=album,artist,track`;
      const response = await fetch(apiURL, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
      const jsonResponse = await response.json();
      return jsonResponse.tracks.items.map(track => {
        return {
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri
        }
      });
    } catch(error) {
      return [];
    }
  },
  async savePlaylist(playlistName, trackURIs) {
    try {
      if (playlistName && trackURIs) {
        let headers = {
            Authorization: `Bearer ${accessToken}`
        };
        let userID;
        // Fetch user ID
        const responseUserID = await fetch('https://api.spotify.com/v1/me', {
          headers: headers
        });
        const jsonResponseUserID = await responseUserID.json();
        userID = jsonResponseUserID.id;
        // Create a new playlist
        headers['Content-Type'] = 'application/json';
        const responsePlaylist = await fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
          method: 'POST',
          body: JSON.stringify({
            name: playlistName
          }),
          headers: headers
        });
        const jsonResponsePlaylist = await responsePlaylist.json();
        const playlistID = jsonResponsePlaylist.id;
        // Add tracks to the new playlist
        const responseAddTracks = await fetch( `https://api.spotify.com/v1/playlists/${playlistID}/tracks`, {
          method: 'POST',
          body: JSON.stringify({
            uris: trackURIs
          }),
          headers: headers
        });
        if (responseAddTracks.ok) {
          console.log('Success!');
        }
        throw new Error('Request failed');
      } else {
        return;
      }
    } catch(error) {
      console.log(error);
    }
  }
};

export default Spotify;
