import axios from 'axios';
import { pathOr } from 'ramda';

export const getStreams = () =>
  axios
    .get('http://api.twitch.tv/helix/streams?user_login=boredashellkid', {
      headers: { 'Client-ID': process.env.REACT_APP_TWITCH_CLIENT_ID }
    })
    .then(function(response) {
      if (pathOr(false, ['data', 'data'], response)) return response.data.data;
    })
    .catch(function(error) {
      // TODO: add error handling ?
    });
