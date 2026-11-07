# Leo GN Construction — Website

A responsive, single-page marketing website for **Leo GN Construction**.

## What is included

- Premium dark-green/gold construction branding and a custom house-mark logo
- Responsive navigation, service cards, about section, process, inspiration gallery, FAQ, contact and footer
- Free-estimate request form that **prepares a text message** to **510-379-0361**
- Call and SMS links, sticky mobile call/estimate bar
- SEO title and description, favicon, accessible labels and keyboard-friendly dialog
- Royalty-free Unsplash stock image URLs (photos load over the internet)
- No build tooling, NPM, server, or paid service required

## Important: Before you publish

1. **Add the verified service area.** The draft does not claim specific cities or counties. Add only confirmed areas served (e.g., East Bay, if accurate).
2. **Verify the services.** Kitchen, bath, remodeling, additions/ADUs, exteriors and general construction are sample categories. Remove any service the company does not provide.
3. **Confirm the company name and legal details.** The branding is “Leo GN Construction.” Do not invent licensing status, insurance, years of experience, certifications, awards, or reviews. **If this is a California licensed contractor, put the verified CSLB license number visibly on the published website before launch** (California requires it in contractor advertising, including websites). If unlicensed, review the separate CSLB rules for unlicensed advertising and permitted project scope. See https://www.cslb.ca.gov and https://web.cslb.ca.gov/About_Us/FAQs/Building_Official_Information_Guide.aspx .
4. **Confirm free-estimate terms.** The website offers a free estimate *conversation*. If estimates have exclusions or limitations, update the wording.
5. **Replace stock photos with real work photos** once you have the company's permission. The inspiration area explicitly identifies stock imagery, not completed projects.
6. **Test the form on your own phone.** The form does NOT send anything automatically. Visitors must review the prepared SMS and press Send. On desktops, they can copy the message. There is **no online lead database or email notifications** in this version.
7. Consider adding a domain, real business email, verified service area, license information, and a privacy notice if you later add analytics or server-backed forms.

## Publish with GitHub Pages (no build required)

1. Create a new repository on GitHub, e.g. `leo-gn-construction`.
2. Upload **all the files in this folder** to the repository **root** (not the ZIP file itself). Keep `index.html`, `styles.css`, `script.js`, the `assets` folder, and `.nojekyll` at the same relative locations.
3. Commit to the `main` branch.
4. Open **Settings → Pages → Build and deployment**. Select **Deploy from a branch**, `main`, `/(root)`, then Save.
5. The published URL will usually be `https://YOUR-USERNAME.github.io/leo-gn-construction/`.
6. On phones, test navigation, tap-to-call and estimate SMS functionality.

All paths are relative, so the site works at either a GitHub Pages project URL or a custom domain.

## Make changes

- **Name / phone / copy / services / service area:** Edit `index.html`.
- **Color palette / layout / responsiveness:** Edit CSS variables at the start of `styles.css`.
- **SMS number:** Search `COMPANY_PHONE` in `script.js`; if the number changes, also update the `tel:`/`sms:` links and visible number in `index.html`.
- **Photos:** Replace the `images.unsplash.com` URLs in `index.html` and the `hero-photo` background URL in `styles.css`.
- **Real lead capture later:** Configure Formspree or another hosted form service. Do not place private API keys in public JavaScript. GitHub Pages does not run back-end code.

## Stock photo licensing and attribution

Photo URLs point to images hosted by **Unsplash** (`images.unsplash.com`). Unsplash's standard license allows commercial use, typically with no attribution required. Source and terms: https://unsplash.com/license . The site does not claim those are Leo GN's completed projects. Stock image hosts remain external dependencies: if a photo is removed or hotlinking is limited, replace the corresponding URL.

Images used are identified by Unsplash photo IDs:
- `photo-1504307651254-35680f356dfd`
- `photo-1600607687920-4e2a09cf159d`
- `photo-1600566753190-17f0baa2a6c3`
- `photo-1600585154340-be6161a56a0c`
- `photo-1487958449943-2429e8be8625`
- `photo-1600585152220-90363fe7e115`
- `photo-1503387762-592deb58ef4e`
- `photo-1600607687939-ce8a6c25118c`
- `photo-1600566753086-00f18fb6b3ea`

### Local preview

Double-click `index.html` or run `python3 -m http.server 8000` from this directory and visit http://localhost:8000 . Images and Google Fonts need an internet connection.