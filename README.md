# POC SSR VITE

`yarn install`
`yarn serve`

server running at localhost:6173

## Reproduce issue

Open any terminal or postman
try to get `localhost:6173/about` (ex: `curl localhost:6173/about`)

Should output `<head>` with `<title>About - My Site</title>`

Then get `localhost:6173/` (ex: `curl localhost:6173/about`)

`<head>` does not contain any meta described by `useServerHead` 
and if you try to get again `localhost:6173/about`, meta have disappeared. 