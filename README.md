# Big Bundle repro

## How to reproduce the issue

Run:

```
npm ci
npx wrangler dev --remote
```

Perform a request by pressing `b`.

In the terminal, we should get an internal error:

```
✘ [ERROR] Uncaught Error: internal error; reference = mcfk3bq8fdqbicj80ts7vsq9
```
