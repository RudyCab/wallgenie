# make deploy m="fixed bug with rendering icons"
deploy:
	git add .
	git commit -m "$(if $(m),$(m),commit changes)"
	git push
	npm run deploy -- -m "Deploy React app to GitHub Pages"
	echo "done"
