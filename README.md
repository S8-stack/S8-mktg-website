# S8 marketing site

Public site for the S8 stack, published at [stack8.tech](https://stack8.tech).

Static HTML/CSS/JS. Cloudflare observes this GitHub repository and auto-deploys `main`.

## Local preview

```bash
python3 -m http.server 8080
```

Open http://127.0.0.1:8080

Docs pages can be regenerated from `tools/render-docs.py` if you change the generator. The HTML under `docs/` is the source of truth that Cloudflare serves.
