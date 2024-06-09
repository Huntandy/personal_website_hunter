@echo off
npm run build&&cd dist&&git init&&git add -A&&git commit -m 'deploy'&&git push -f https://github.com/Huntandy/personal_website_hunter.git master:gh-pages&&cd ..