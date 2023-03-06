# Cleanup previous prod
cd ..
rm -rf prod
mkdir prod

# Init Git prod
cd prod
git init
git remote add origin git@github.com-slim-dl:slim-dl/app-prod.git

# Pre-build app-server
cd ..
cd dev
cd app-server 

# Build app-server
rm -rf dest
npm run build
rsync -av dest/ ../../prod
cp {.gitignore,package.json} ../prod


# Pre-build app-frontend
cd .. 
cd app-frontend 

# Build app-frontend
rm -rf www
npm run build --prerender
rsync -av --delete www/ ../../prod/www

# Push prod 
cd ..
cd ..
cd prod
npm install 
git add --all
git commit -m "Pre-deploy"
git push origin main --force
cd ..
cd dev
