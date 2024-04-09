const githubQuery = {
    query: `
    {
      viewer {
        login
        name
        repositories(first: 10) {
          nodes {
            id
            name
            description
            url
          }
        }
      }
    }
    `
    };

export default githubQuery;