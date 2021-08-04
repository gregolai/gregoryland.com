#!/bin/bash
git pull
npm i
npm run build:prod

pm2 stop --silent new.gregoryland.com
pm2 delete --silent new.gregoryland.com
pm2 start "npx serve public -l 8080" --name new.gregoryland.com
