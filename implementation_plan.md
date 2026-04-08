# Redesign and Bilingual Support Plan

This plan aims to fulfill your request for a modern, dazzling website update, including adding your contact details, and making the portfolio bilingual (Arabic and English).

## User Review Required

> [!IMPORTANT]
> The default language is set to Arabic (`ar`), and the user can toggle to English via a new button in the navigation bar. Please review the proposed translations for your new details to ensure they are correct.

> [!TIP]
> The design will be upgraded with modern glowing animations, improved glassmorphism, and a much smoother overall experience to wow the visitors.

## Proposed Changes

### 1- Contact Information
We will update the contact section (`#contact`) and footer to include your new information:
*   **Address:** اليمن - محافظة الضالع - مديرية قعطبة (Yemen - Al Dhale Governorate - Qa'atabah District)
*   **Phone Number:** 770056351 (+967 770056351)

---

### 2- English / Arabic Translation System
We will create a multi-language system using JavaScript.
*   **HTML**: Add a `data-i18n` attribute to all elements containing text. Add a toggle button in the navbar: `ع / EN`.
*   **JavaScript**: Store a dictionary of all texts in both languages. A function will detect the selected language, update the text on the page, and swap the text direction (`dir="rtl"` for Arabic, `dir="ltr"` for English).

#### [MODIFY] index.html
- Add translation keys (`data-i18n`) to tags.
- Add language switcher to the navbar.
- Add the phone number and address to the Contact Section.

#### [MODIFY] script.js
- Include the translation mapping object.
- Write the function to switch languages based on user click.
- Continue to run the animation scripts.

---

### 3- Design Enhancements (Modern Frame)
We'll update the CSS to give it a fresher, state-of-the-art feel layout.

#### [MODIFY] style.css
- Refine colors and gradients to look more premium (e.g. dynamic animated gradients).
- Improve the `glass-card` look (adjust border opacity, add subtle internal shadows).
- Add hover effects for the contact information, and adjust padding for the LTR/RTL support.

## Open Questions

> [!WARNING]  
> Are there any specific colors you prefer for the new modern design? 
> Are you okay with using a local JavaScript object to manage the translations as described?

## Verification Plan

### Manual Verification
- Render the `index.html` file in the browser locally.
- Test the language switch button to ensure all text translates correctly and the page direction flips seamlessly holding its structure.
- Review visually to ensure it's "dazzling and modern".
