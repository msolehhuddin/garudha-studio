GARUDHA STUDIO - website files
==============================

index.html              Page structure and all English text
assets/css/style.css    All styling. Colours/spacing: variables at the top (:root)
assets/js/main.js       EN/BM language switch, mobile menu, enquiry form
assets/img/             hero.jpg (top banner), crew.jpg (team band), contact.jpg (contact background)

Common edits
------------
- Change text: edit it in index.html, then add/update the same English text in
  the "translations" list in assets/js/main.js so the Bahasa Malaysia version matches.
  (The key must be exactly the same as the English text.)
- Change colours: assets/css/style.css, --red / --red2 / --bg / --paper at the top.
- Change a photo: replace the file in assets/img/ with the same file name
  (keep it wide/landscape, under ~300 KB for fast loading).
- Enquiry form: opens the visitor's email app addressed to info@garudhastudio.com.
  To use a real form backend later, edit the submit handler at the bottom of main.js.
- Fonts (Inter, Instrument Serif) load from Google Fonts in the <head> of index.html.

Upload the whole "garudhastudio" folder contents to the hosting root (index.html must be in the root).
