npm run build

cd public

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:CharlesTiptoeing/znote.git master

cd ../
rm -rf public