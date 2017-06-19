#!/bin/bash

cp -r web/* dist


jpegoptim -m70 dist/images/*
optipng dist/images/*

minify -o dist/css/style.css dist/css/style.css 
minify -o dist/css/lightbox.css dist/css/lightbox.css
minify -o dist/js/lightbox.js dist/js/lightbox.js
minify -o dist/js/script.js dist/js/script.js