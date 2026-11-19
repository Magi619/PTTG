# Maksoft

**Less busywork. More brilliant work.**

Maksoft is a unified home for practical browser-based tools for business operations, content production, creative work and everyday utilities.

## Live preview

After enabling GitHub Pages for the `main` branch with the repository root as the publishing folder, the site will be available at:

https://magi619.github.io/PTTG/

## Tool catalogue

### Operations
- Batch Stock Lookup — batch stock checks, vintage search and Excel export
- Monthly AHD — Excel/CSV summaries with configurable field mapping
- Gift Page SOP Generator — create and manage gift product page SOPs
- Order Code Extractor — extract and verify codes from PDFs
- Akamai Image Link Generator — build market-specific image URLs

### Content
- Event Ticket Builder — create event ticket HTML with live preview
- Landing Page HTML Builder — generate split-content page markup
- Mini HTML Editor — format, preview and copy HTML snippets

### Creative
- Frame & Fix Photo Toolkit — browser image editor with layers and selection tools
- Frame Tool — add solid or gradient image frames

### Utilities
- INZONE Buds Battery Monitor — inspect supported earbud battery levels through WebHID

Excel Tools is reserved for a future collection.

## Project structure

```
.
├── index.html
├── assets/
│   ├── maksoft.css
│   ├── maksoft.js
│   ├── maksoft-tool.css
│   └── maksoft-tool.js
└── tools/
    ├── Akamai/
    ├── Event/
    ├── Gift PDP page/
    ├── Mini HTML/
    ├── Pageturner/
    ├── Photoshop/
    ├── VandingPage/
    ├── batch-stock/
    ├── frametool/
    ├── inzone-buds/
    └── monthly_ahd/
```

## Run locally

Open `index.html` in a modern browser. The tools are standalone pages in the `tools/` directory and share a common Maksoft navigation bar and visual baseline.

## Browser notes

- INZONE Buds Battery Monitor requires a compatible browser with WebHID support (Chrome or Edge on a supported desktop).
- PDF extraction and spreadsheet export use the libraries loaded by the individual tool pages.
- Some tools connect to existing public product APIs or external services. Browser permissions, network access and the target service may affect their availability.

## Origin and preservation

The first Maksoft release brings forward the existing utility implementations from `Magi619/uknowwhoim` and gives them a shared Maksoft interface. The original repository has not been modified. Individual tools can be redesigned and improved independently in future updates.

## Credits

Created by Mahendran.
