# Jammming
A web app that allows users to search tracks over Spotify and create a new playlist to their Spotify account. 

The app is available for use at [masa-jammming.surge.sh](https://masa-jammming.surge.sh).

## Motivation
Writing the Javascript and React code from scratch to create this app is the capstone project of CodeCademy Pro Intensive "[Build Front-End Web Applications from Scratch](https://www.codecademy.com/learn/paths/build-web-apps-with-react)" (a 8-week intensive online course on JavaScript and React fundamentals). It demonstrates what I have learned from the course.

## How the app is constructed
The Jammming app consists of several React components plus one utility script to access to Spotify API.

### App
The App component plays the following roles
- Initialize the state of (1) the list of track search results, (2) the attributes of the track to be played back, (3) the list of tracks in the playlist, (4) the title of the playlist.
- Define a function that is triggered when users hit the search button or the return key after typing a search term (by calling the function defined in Spotify utility).
- Define a function that is triggered when users click the headphone icon of the track in the search results.
- Define a function that is triggered when users click the plus button of the track in the search results, which will add the clicked track to a playlist.
- Define a function that is triggered when users click the minus button of the track in the playlist, which will remove the clicked track from teh playlist.
- Define a function that is triggered when users type the playlist title.
- Define a function that is triggered when users hit the SAVE TO SPOTIFY button, which will upload the playlist to users' Spotify account  (by calling the function defined in Spotify utility).
- Render all the other components

### SearchBar
The SearchBar component handles the search of tracks over Spotify
- Initialize and update the state of a search term that users enter.
- Trigger the search over Spotify when users hit the return key or the SEARCH button.

### SearchResults
The SearchResults component renders the list of trackes retrieved from Spotify search.

### SearchResult
The SearchResult component renders the track information retrieved from Spotify search. It also handles the users interaction with search results:
- Trigger the playback of the track when users click the headphone icon next to the track information
- Add the track to the playlist when users click the plus button

### AudioPlayer
The AudioPlayer component renders the audio player and sets the track information passed from the App component. *(This component is not part of the CodeCademy course.)*

### Playlist
The Playlist component renders the playlist and handles the typing of a playlist title by users.

### PlaylistTrack
The PlaylistTrack component renders the track information in the playlist and handles the clicking of the minus icon by users to remove the track from the playlist

### Spotify utility
The Spotify utility handles the access to Spotify API for track search and for the addition of a new playlist to users' account.
- Check if the access token is obtained. If not, redirect users to Spotify user login page.
- Send the search term users have entered to Spotify API and retrieve the list of tracks that match the search term.
- Send the playlist title and the list of tracks in the playlist to Spotify API so that users will see the new playlist in their Spotify account.

## License
The Jammming app is [MIT licensed](https://github.com/masakudamatsu/jammming/blob/master/LICENSE).
