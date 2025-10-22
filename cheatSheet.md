<!-- Terminal cheat sheet for git -->

<!-- Clones repo to folder -->

git clone "repo-URL"

<!-- Creates branch with name -->

git branch "branch-name"

<!-- Switches to branch -->

git checkout "branch-name"

<!-- Create and switch branch in a single command -->

git checkout -b "branch-name"

<!-- Adds all changes to commit stage -->

git add .

<!-- Shows status of files -->

git status

<!-- Commits files with custom comment -->

git commit -m "type comment on changes"

<!-- Pushes files to repo from branch. NB: First time use "--set-upstream". -->

git push --set-upstream origin "branch-name"

<!-- Fetches all branches -->

git fetch

<!-- Pulls and merges updated code from repo -->

git pull
