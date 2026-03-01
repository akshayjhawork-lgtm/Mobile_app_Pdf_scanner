# OfficeToolsPro (Mobile App Concept)

A dark-themed mobile-first prototype for **OfficeToolsPro**, designed as a comprehensive everyday office utility app.

## What is included

### 1) PDF Creation & Conversion
- Word → PDF
- Excel → PDF
- PPT → PDF
- Text → PDF
- Image → PDF
- Scan → PDF
- PDF → Word / Excel / PPT / Text
- Batch conversion queue
- Cloud & email export

### 2) PDF Editing
- Merge / Split / Rearrange / Extract pages
- Delete and rotate pages
- Add page numbers
- Add watermark (company logo)
- Add/remove password
- Encrypt PDF (AES)
- Fill and sign PDF
- Digital signature support
- Annotate / comment / highlight
- Redact sensitive information
- Compress PDF with quality presets
- OCR for searchable PDFs

### 3) Office Document Scanner
- Multi-page scan
- Auto edge detection
- Smart crop + perspective correction
- Receipt scanner
- ID card scanner
- Whiteboard scanner
- Output to searchable PDF, editable Word, plain text
- Document filters for readability
- Auto naming and folder tags

### 4) Business & Finance Calculators
- GST
- EMI
- Loan
- SIP
- Compound interest
- Tax slab
- Profit margin
- Break-even
- Salary
- Overtime
- Currency converter (live rates)
- Invoice total + discount calculator

### 5) Image Tools
- Image resize
- Image compression
- Brightness/contrast/saturation adjustment
- Crop/rotate/perspective fix
- PNG/JPG/WEBP/HEIC conversion
- Document enhancement

## Feature optimization (added / removed)

### Added to make it more complete
1. **Batch conversion queue** for productivity.
2. **Cloud and email export shortcuts** for daily sharing.
3. **Document enhancement filters** for better scan quality.
4. **Invoice & discount calculator** for business users.
5. **Auto naming/folder tags** to organize scanned files.

### Deferred (better as premium/phase-2)
1. AI contract analysis
2. E-invoicing integrations
3. Team workspace collaboration

These are intentionally deferred to keep MVP performance fast, UI simple, and offline reliability high.

## Run locally

```bash
python3 -m http.server 4173
```

Open: `http://localhost:4173`
