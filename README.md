Thought and Function Test
===

Prerequisites
---
`node > v10.x`
`yarn > v1.15.x`

Setup
---
Local postgres database
From psql create with
`CREATE DATABASE tnfballs`

This assumes database server is running on postgres default port with the default postgres credentials. Credentials can be changed in the .env file.

Install dependencies
`yarn`

Run both client and node server with
`yarn dev`

Browser window should open automatically to
`http://localhost:3000`

Features
---
- A user can select their profile
- The user can see their own and the publicly available ball configurations
- The user can select a ball config to replay it
- The user can start a new configuration to enter it
- New configs can be saved
- When saved if the public checkbox is marked then the config is available to other users