import type { NextApiHandler } from "next";
import { Octokit } from '@octokit/core'
import { RecordItem } from "../../types/records";


export interface ApiResponse {
    message: string;
    data: RecordItem[];
}

const octokit = new Octokit({ auth: process.env.GIT_TOKEN })

function filterTruthy<T>(x: T | false): x is T {
    return Boolean(x);
}

const handler: NextApiHandler = async (req, res) => {
    const response = await octokit.request("GET /gists/{gist_id}", { gist_id: process.env.GIST_ID })
    if (response.status == 200) {
        const files = response.data.files
        res.json({
            message: "Success", data: Object.keys(files).map((key) => {
                try {
                    return JSON.parse(files[key].content) as RecordItem;
                } catch (error) {
                    return false;
                }
            }).filter(filterTruthy).sort((a, b) => {
                return new Date(a.date) < new Date(b.date) ? 1 : -1;
            })
        })
    } else
        res.status(response.status).json({ message: "Error", data: [] })
}

export default handler


