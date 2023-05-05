#!/usr/bin/env zx
import 'zx/globals'

cd(path.resolve(os.homedir(), 'work/projects/frozen'));

const initialBranch = await $`git branch --show-current`;

await $`git checkout master`;
await $`git pull`;
await $`git checkout ${initialBranch}`;
await $`git rebase master --no-commit`;
