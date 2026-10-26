# Configure the Contact Form

`src/pages/contact.astro` uses the shared `src/components/ui/Form.astro` component and the project's configured Formspree endpoint. The Contact page submits a static HTML form to Formspree and enhances it with fetch-based loading, validation, success, and error states. It includes the Formspree `_gotcha` honeypot; Formspree performs server-side validation and spam filtering.

## Current integration

- Endpoint: `https://formspree.io/f/mzeeebev` (public form ID supplied for this project; no secret is embedded).
- Form fields: required name, email, topic, and message.
- The form does not collect a phone number and warns visitors not to include sensitive health information.
- Contact actions are handled by Formspree's existing delivery workflow. Do not add a second backend or change the endpoint without an explicit request.
- `vercel.json` must allow `https://formspree.io` in `connect-src` for the AJAX enhancement. The form's native POST works as the no-JavaScript fallback.
- `src/assets/styles/tailwind.css` configures `@tailwindcss/forms` in class-only mode. The form combines `form-input`, `form-select`, and `form-textarea` with the existing `gg-field` styles.

## Where things are

| Concern            | File                                                      |
| ------------------ | --------------------------------------------------------- |
| Page copy and data | `src/pages/contact.astro`                                 |
| Form markup/state  | `src/components/ui/Form.astro`                            |
| Props              | `Form`, `Input`, `Select`, `Textarea` in `src/types.d.ts` |
| Design tokens      | `src/assets/styles/tailwind.css`                          |
| Form CSP           | `vercel.json`                                             |

## Validation

Use native `required` fields and the email input type for browser validation, then let Formspree validate submissions server-side. Keep the loading guard so a double click cannot submit twice. Keep server errors and rate-limit errors visible and preserve field values after a failure. Do not test by sending a real inquiry unless the form owner explicitly asks; use browser request mocks for UI state verification.

Do not put private API keys in markup. The Formspree form ID is a public endpoint identifier, not a secret.
