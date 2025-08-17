# Big Bundle repro

## How to reproduce the issue

Run:

```
npm ci
npx wrangler dev --remote
```

Perform a request by pressing `b`.

It should fail, and in the terminal it should output something like:

```
[wrangler:info] Ready on http://localhost:8787
Script modified; context reset.
[wrangler:info] GET / 500 Internal Server Error (335ms)
✘ [ERROR] Uncaught Error: internal error; reference = khmb50r2k3i8knrpai3fac5r


✘ [ERROR] Uncaught Error: internal error; reference = khmb50r2k3i8knrpai3fac5r
```
