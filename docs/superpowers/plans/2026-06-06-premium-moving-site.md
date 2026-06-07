# Premium Moving Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a premium multi-page static website for 快靚正搬屋公司 / 貨運公司 based on the five provided reference images.

**Architecture:** Use plain HTML, CSS, and JavaScript so the site can deploy easily to Netlify as static files. Keep shared visual patterns in `styles.css`, shared interactions in `script.js`, and create focused pages for home, services, booking/quote, and FAQ/contact.

**Tech Stack:** Static HTML, CSS, vanilla JavaScript, Node built-in test runner style via `node tests/site-structure.test.js`, Netlify static publish.

---

### Task 1: Update Structural Tests

**Files:**
- Modify: `tests/site-structure.test.js`
- Test: `tests/site-structure.test.js`

- [ ] **Step 1: Write failing tests**

Assert that `index.html`, `services.html`, `booking.html`, and `faq-contact.html` exist; assert that the new pages include premium sections such as service area, booking hero, material panels, FAQ, and WhatsApp links.

- [ ] **Step 2: Run test to verify it fails**

Run: `node tests/site-structure.test.js`
Expected: FAIL because the new page files do not exist yet.

- [ ] **Step 3: Implement static pages**

Create the three new pages and rewrite the home page with shared navigation, premium hero sections, stronger CTA blocks, and consistent page links.

- [ ] **Step 4: Run test to verify it passes**

Run: `node tests/site-structure.test.js`
Expected: PASS.

### Task 2: Build Premium Multi-Page Layout

**Files:**
- Modify: `index.html`
- Create: `services.html`
- Create: `booking.html`
- Create: `faq-contact.html`
- Modify: `styles.css`

- [ ] **Step 1: Implement home page**

Home page includes top trust strip, branded header, hero with truck/team image, quick service tiles, core service cards, trust metrics, and CTA footer.

- [ ] **Step 2: Implement service page**

Service page mirrors the package/material reference: included services, packaging materials, storage/transport service groups, and high-visibility WhatsApp CTA.

- [ ] **Step 3: Implement booking page**

Booking page mirrors the online/phone booking reference: online flow, phone flow, action buttons, quote form, and WhatsApp confirmation messaging.

- [ ] **Step 4: Implement FAQ/contact page**

FAQ/contact page mirrors the reference contact layout: FAQ accordion, contact card, inquiry form, Hong Kong service areas, business hours, and CTA band.

### Task 3: Interactions and Deployment Readiness

**Files:**
- Modify: `script.js`
- Create: `package.json`
- Create: `netlify.toml`

- [ ] **Step 1: Fix mobile navigation**

Use `.main-nav a` for close-on-click behavior and guard missing DOM nodes.

- [ ] **Step 2: Improve quote form behavior**

Show a clear local confirmation after submit and keep the form safe for static hosting.

- [ ] **Step 3: Add deployment metadata**

Add `package.json` with `test` script and `netlify.toml` with static publish configuration.

### Task 4: Verification

**Files:**
- Test: all changed files

- [ ] **Step 1: Run tests**

Run: `npm test` or `node tests/site-structure.test.js`
Expected: PASS.

- [ ] **Step 2: Serve locally**

Run: `python3 -m http.server 8080`
Expected: local static server opens the site.

- [ ] **Step 3: Browser visual QA**

Check desktop and mobile viewports for nonblank images, readable text, working navigation, working FAQ/details, and form confirmation.
