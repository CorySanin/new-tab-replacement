#!/bin/bash
cd src/images
inkscape -w 16 -h 16 action.svg -o action-16.png && \
inkscape -w 24 -h 24 action.svg -o action-24.png && \
inkscape -w 32 -h 32 action.svg -o action-32.png && \
inkscape -w 64 -h 64 action.svg -o action-64.png && \
inkscape -w 128 -h 128 action.svg -o action-128.png
cd ..
zip -ur ../new-tab-replacement.zip ./*