const fs = require('fs');
const os = require('os');
const octokit = require("./src/octokit");

const run = async (org, teamSlug) => {
    try {
        const repos = await octokit.teams.listReposInOrg({
            org: org,
            team_slug: teamSlug,
        });
        const lines = []
        repos.data.forEach(repo => {
            const {html_url, description, private, size, language} = repo;
            if (!private) {
                lines.push('* [' + repo.name + '](' + html_url + ') - ' + language);
            }
        });
        lines.sort()
        fs.writeFileSync('./docs/_includes/generated-repos.md', lines.join(os.EOL));
    } catch (e) {
        console.error(e);
    }
};

run('navikt', 'teampensjon');
