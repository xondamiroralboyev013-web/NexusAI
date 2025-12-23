# push-to-github.ps1
# Usage: run this script and enter your remote URL when prompted.
# It will add the remote and push the current master branch to origin (and also to origin/main).

$remote = Read-Host "Enter remote URL (e.g. https://github.com/username/repo.git)"
if (-not $remote) { Write-Host "No remote provided. Exiting."; exit 1 }

# Add remote if not already present
$existing = git remote
if ($existing -notcontains 'origin') {
    git remote add origin $remote
    Write-Host "Added remote origin -> $remote"
} else {
    Write-Host "Remote 'origin' already exists. Setting URL to provided one."
    git remote set-url origin $remote
}

# Push current branch to origin
$branch = git rev-parse --abbrev-ref HEAD
Write-Host "Pushing branch $branch to origin/$branch..."
git push -u origin $branch

# Also push to origin/main (so GitHub Actions that watch 'main' trigger)
Write-Host "Also pushing $branch to origin/main (to trigger workflows listening on 'main')..."
git push -u origin $branch:main

Write-Host "Push complete. Check GitHub Actions page to see workflow runs."