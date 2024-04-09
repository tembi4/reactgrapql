const githubQuery = (queryString, pageCount) => {
    return {
        query: `
    {
      viewer {
        login
        name
      }
      search(query: "${queryString} user:tembi4 sort:updated-desc", type: REPOSITORY, first: ${pageCount}) {
        repositoryCount
        nodes {
          ... on Repository {
            id
            name
            description
            url
            viewerSubscription
            licenseInfo {
              id
              spdxId
            }
          }
        }
      }
    }
    `
    };
};

export default githubQuery;