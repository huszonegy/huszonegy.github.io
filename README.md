# HUSZONEGY weboldal, üres keret

https://huszonegy.world

Simple site, with some dynamic rendering.

This is not a content manaagement system, no DB, no users.

Tech: vite, bootrstrap, vue

## Usage

0. Prereq: node, npm

```
npm install
```

1. Run for local development setup:
```
npm run dev
```
Open http://localhost:5137

2. Check production version locally:
```
npm run build && npm run preview
```
Open http://localhost:4137

3. Build for deploy:
```
npm run build
```

Docs:

https://getbootstrap.com/docs
https://vuejs.org/

## Contribute

- For items that are stored in data files, like links, adding should be straightforward. Watch out for commas!
- For new pages, etc., that's more work, check out existing pages (route, view, etc.)
- Use a PR for any change


## TODO

- könyvek - HU
- backlink from twentyone.world
- meta tags, search friendly
- light color mode
