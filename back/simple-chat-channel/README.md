# Simple Chat Channel

To simplify this challenge, we created an API that simulates a Chat Channel (Ex: Slack, Teams, Whatsapp, etc.)

This is a very simple chat interface with a built in AI intelligence (?) to auto-respond every message that you will send as the Bot Lara AI.

# Instructions to run this API

## Docker

1. In your console `cd` to this folder (`challenges/back/simple-chat-channel`)
2. Build docker image: `docker build . -t challenge-lara-ai`
3. Start docker image: `docker run --rm -it -p 8080:8080 --name challenge-lara-ai challenge-lara-ai`
4. The process will start and mount API on port 8080

## Local Node

1. Install node version 20
2. In your console `cd` to this folder (`challenges/back/simple-chat-channel`)
3. Install dependencies: `yarn install`
4. In this folder run: `node start`
5. The process will start and mount API on port 8080
