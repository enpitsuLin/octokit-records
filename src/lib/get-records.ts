import { Octokit } from '@octokit/core'

const octokit = new Octokit({ auth: process.env.GIT_TOKEN })

export async function getRecords() {
    const res = await octokit.request("GET /gists/{gist_id}", { gist_id: process.env.GIST_ID })
    return res
}