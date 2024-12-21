# HUSZONEGY weboldal

https://huszonegy.world

Simple site, with some dynamic rendering.

This is not a content management system, no DB, no users.

Tech: Vite, Bootrstrap, Vue

## Usage

0. Set up

Prereq: node, npm

```
npm install
```

1. Run for local development setup:
```
npm run dev
```
Open http://localhost:5173

2. Check production version locally:
```
npm run build && npm run preview
```
Open http://localhost:4137

3. Serve SSR server on localhost:3000:
```
npm run serve
```
Open http://localhost:3000

4. Build for deploy:
```
npm run build
```

Docs:

https://getbootstrap.com/docs
https://vuejs.org/

Notes:

Vue single-page-application routing does not work well with Github pages, see https://learnvue.co/articles/deploy-vue-to-github-pages .
As a workaround, index.html is simply duplicated to 404.html


## Add Nostr username and pubkey for NIP05

- npub - hex converter: https://nostrtool.com/
- sample PR: https://github.com/huszonegy/huszonegy.github.io/pull/65/files


## Contribute

- For items that are stored in data files, like links, adding should be straightforward. Watch out for commas!
- For new pages, etc., that's more work, check out existing pages (route, view, etc.)
- Use a PR for any change


## TODO

- light color mode
