cd ..
rm -rf prod
mkdir prod
cd prod
git init
git remote add origin git@github.com-slim-dl:slim-dl/app-prod.git
cd ..
cd dev
cd app-server 
npm run pfd 
cd .. 
cd app-frontend 
npm run pfd
cd ..
cd ..
cd prod
npm install 
git add --all
git commit -m "Pre-deploy"
git push origin main
cd ..
cd dev
