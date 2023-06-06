#!/usr/bin/env zx
import 'zx/globals'

cd(path.resolve(os.homedir(), '/Users/gavroman/arcadia/market/front/apps/marketfront'));

const branchOutput = await $`arc branch --json`;
const branches = JSON.parse(branchOutput);
const initialBranch = branches.find(({current}) => current)?.name;
if (!initialBranch) {
    throw new Error('No current branch:\n' + branchOutput);
}

await $`arc checkout trunk`;
await $`arc pull`;
await $`arc checkout ${initialBranch}`;
await $`arc rebase trunk`;
