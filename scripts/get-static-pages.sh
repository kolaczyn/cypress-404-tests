#!/bin/sh

curl -s https://www.rossmann.pl/sitemap_static.xml |
grep "<loc>" | # find lines with links
sed "s/<loc>//g" | # yeet opening tag
sed "s/<\/loc>//g" | # yeet closing tag
sed "s/\t//g" | # rm whitespace
sed "s/https:\/\/www.rossmann.pl\///g" # rm domain name