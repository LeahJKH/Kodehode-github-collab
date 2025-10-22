<!-- Clones repo to folder -->

git clone "repo"

<!-- Creates branch named Walle -->

git branch "Walle"
git checkout "Walle"

<!-- Adds all changes to commit stage -->

add .

<!-- Checks what changes are to be committed -->

git status

<!-- Commits files with comment -->

git commit -m "type comment on changes"

<!-- Pushes files to repo with branch name. NB: First time use "--set-upstream". After that you dont have to. -->

git push --set-upstream origin Walle
