# Big Bundle repro

The issues below only occur when running in remote dev mode (`wrangler dev --remote`) and `enable_nodejs_fs_module` is included in wrangler's `compatibility_flags`.

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

## Uncaught SyntaxError: Invalid or unexpected token

I was only able to reproduce the internal error above with a big bundle.
However, with a very basic worker I still get an error: `Uncaught SyntaxError: Invalid or unexpected token`.

To reproduce it:

```
git checkout invalid-or-unexpected-token
npx wrangler dev --remote
```

Perform a request by pressing `b`, and terminal should output:

```
Uncaught SyntaxError: Invalid or unexpected token
```

