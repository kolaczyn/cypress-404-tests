#!/bin/sh


for page in kategorie marki promocje faq pomoc karta-podarunkowa; do
  sed "s/__FILENAME__/$page/g" base-file.js  > "../cypress/e2e/404/$page.cy.js"
done