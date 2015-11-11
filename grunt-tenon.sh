#!/bin/bash
URL=$1
rm -rf html
mkdir html
curl ${URL} >> html/Url1.html
npm install
./node_modules/.bin/grunt tenon