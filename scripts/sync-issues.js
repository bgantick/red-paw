/*
  Copy all open issues from the client-boilerplate repository and add them to
  the client project specified in the first argument. The specified repository
  must belong to P'unk Ave in order for this to work.

  node scripts/sync-issues.js MY-REPO-NAME
*/

const axios = require('axios');

axios.defaults.baseURL = 'https://api.github.com/repos/punkave';
axios.defaults.headers = {
  'User-Agent': 'axios',
  'Authorization': 'token 9342c4dfd7e84989b4f357a3a71790524247a254'
};

if (!process.argv[2]) {
  console.error('You must provide a P\'unk Ave repo name to copy the issues to.');
  console.error('Try this:');
  console.error('node scripts/sync-issues.js MY-REPO-NAME');
  process.exit(1);
}

const newRepoName = process.argv[2];

async function clearLabels (oldLabels) {
  console.log('Clearing labels...');
  for (let label of oldLabels) {
    const res = await axios(`/${newRepoName}/labels/${label.name}`, { method: 'DELETE' });
    if (res.status !== 204) {
      console.log(`Oops, problem deleting ${label.name}: res.status`);
    } else {
      console.log(`${label.name} deleted`);
    }
  }
};

async function createLabels (labels) {
  console.log('Adding new labels...');
  for (let label of labels) {
    const res = await axios(`/${newRepoName}/labels`, {
      method: 'POST',
      data: {
        'name': label.name,
        'color': label.color
      }
    });
    if (res.status !== 201) {
      console.log(`Error adding ${label.name}: ${res.status}`);
    } else {
      console.log(`${label.name} added.`);
    }
  }
};

async function createMilestones (milestones) {
  console.log('Adding milestones...');
  const currMilestones = await axios(`/${newRepoName}/milestones`);
  for (let milestone of milestones) {
    if (currMilestones.data.find(x => x.title === milestone.title)) {
      console.log(`${milestone.title} exists. Skipping.`);
    } else {
      const res = await axios(`/${newRepoName}/milestones`, {
        method: 'POST',
        data: {
          'title': milestone.title
        }
      });
      if (res.status !== 201) {
        console.log(`Error adding milestone ${milestone.title}: ${res.status}`);
      } else {
        console.log(`${milestone.title} milestone added.`);
      }
    }
  }
};

async function createIssues (issues) {
  console.log('Syncing issues...');
  const currIssues = await axios(`/${newRepoName}/issues`);
  for (let issue of issues) {
    const newIssue = {
      title: issue.title,
      data: issue.body,
      milestone: issue.milestone ? issue.milestone.number : null,
      labels: issue.labels
    };
    if (currIssues.data.find(x => x.title === issue.title)) {
      console.log(`${issue.title} issue exists. Updating...`);
      const res = await axios(`/${newRepoName}/issues/${currIssues.data.find(x => x.title === issue.title).number}`, {
        method: 'PATCH',
        data: newIssue
      });
      if (res.status !== 200) {
        console.log(`Error editing issue ${issue.title}: ${res.status}`);
      } else {
        console.log(`${issue.title} issue edited.`);
      }
    } else {
      const res = await axios(`/${newRepoName}/issues`, {
        method: 'POST',
        data: newIssue
      });
      if (res.status !== 201) {
        console.log(`Error adding issue ${issue.title}: ${res.status}`);
      } else {
        console.log(`${issue.title} issue added.`);
      }
    }
  }
};

async function syncIssues () {
  try {
    // clear labels
    const oldLabels = await axios(`/${newRepoName}/labels`);
    await clearLabels(oldLabels.data);
    // create new labels
    const labels = await axios('/client-boilerplate/labels');
    await createLabels(labels.data);
    // create milestones if they don't exist
    const milestones = await axios('/client-boilerplate/milestones');
    await createMilestones(milestones.data);
    // create our issues - if they already exist, update
    const issues = await axios('/client-boilerplate/issues');
    await createIssues(issues.data);
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};

syncIssues();
