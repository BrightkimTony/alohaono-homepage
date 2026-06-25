# Aloha Ono Homepage

Static bilingual homepage for Aloha Ono.

## Open

```text
http://127.0.0.1:4174/home/
```

## Routes

- `/`: redirects to `/home/`
- `/home/`: general brand, menu preview, view, and introduction page
- `/Reservation/`: Google Ads-friendly reservation landing page with the menu PDF, Google, Instagram, and Naver links

## Notes

- Default language: English
- Language toggle: English/Korean
- Reservation/contact: external channel cards only. No personal data is stored.
- External links are ordered as Google, Instagram, Naver.
- Update external URLs in `script.js` -> `EXTERNAL_LINKS`.
- Update text in `script.js` -> `translations.en` and `translations.ko`.
- Menu PDF asset: `assets/alohaono-menu-may.pdf`.
