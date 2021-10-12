# TwitchToKemper

Node.js-App I use for letting Twitch Chat Control my Kemper Patches using [Comfy.js](https://github.com/instafluff/ComfyJS) and [easymidi](https://github.com/dinchak/node-easymidi).

- install dependencies
- Get your OAUTH-Token from Twitch: https://github.com/twitchdev/authentication-node-sample
- Create .env File for

`TWITCHUSER=YOURCHANNELNAMEHERE
OAUTH=oauth:YOUROAUTHTOKENHERE`

- define your Rewards (reward == YOURTWITCHREWARDNAME)
- define your MidiMessages KemperMIDI-Reference: http://thelookmusic.co.uk/kemper/kemper%20midi%20data.pdf
- run `node index.js`
