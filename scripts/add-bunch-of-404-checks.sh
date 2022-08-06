#!/bin/sh

# TODO this is dumb, I should use pipes instead
./get-static-pages.sh > static-pages

while read page; do
  sed "s/__FILENAME__/$page/g" base-file.js  > "../cypress/e2e/404/$page.cy.js"
done <static-pages
