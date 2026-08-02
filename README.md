# Itha-website

## Large Asset Hosting (Cloudflare R2)

Large media files that exceed Cloudflare Pages' 25 MiB per-file limit are hosted on Cloudflare R2 and referenced by URL in the HTML. These files are listed in `.gitignore` and must **not** be committed to the repository.

| File | R2 URL |
|------|--------|
| `assets/harbringer_chapter_background.mp4` | `https://pub-c6114c4f6dd1446c9ec91a3b643960f6.r2.dev/harbringer_chapter_background.mp4` |

To add a new large asset: upload it to the `velldenar-assets` R2 bucket (Cloudflare Dashboard → R2), ensure the Public Development URL is enabled, add the file path to `.gitignore`, and reference it by its `https://pub-c6114c4f6dd1446c9ec91a3b643960f6.r2.dev/...` URL in the HTML.
