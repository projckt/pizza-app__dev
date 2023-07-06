# Cleanup previous prod
cd ..
rm -rf prod
mkdir prod

# Init Git prod
cd prod
git init
git remote add origin git@github.com-projckt:projckt/pizza-app__prod.git

# Pre-build app-server
cd ..
cd dev
cd app-server 

# Build app-server
rm -rf dest
npm run build
rsync -av dest/ ../../prod
cp {.gitignore,package.json} ../../prod


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
git add --all
git commit -m "Deploy build `date`"
git push origin main --force

# Install modules
npm install 
cd ..
cd dev
