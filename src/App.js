import {useCallback, useEffect, useState} from "react";
import github from "./db"
import query from "./Query";
import RepoInfo from "./RepoInfo";
import SearchBox from "./SearchBox";

function App() {

    let [userLogin, setUserLogin] = useState("")
    let [repoList, setRepoList] = useState(null)
    let [queryString, setQueryString] = useState("")
    let [pageCount, setPageCount] = useState(10)
    let [totalCount, setTotalCount] = useState(0)

    const fetchData = useCallback(() => {
        fetch(github.baseURL, {
            method: "POST",
            headers: github.headers,
            body: JSON.stringify(query(queryString, pageCount)),
        })
            .then((response) => response.json())
            .then((data) => {
                const {login} = data.data.viewer
                setUserLogin(login);
                const {nodes, repositoryCount} = data.data.search
                setRepoList(nodes)
                setTotalCount(repositoryCount)
            })
            .catch((err) => {
                console.log(err);
            });
    }, [queryString, pageCount]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <div className="container mt-5">
            <h1 className="text-primary"><i className="bi bi-diagram-2-fill"/> Repos</h1>
            <h3 className="text-secondary">Viewer: <b>{userLogin}</b></h3>
            <SearchBox
                queryString={queryString}
                totalCount={totalCount}
                pageCount={pageCount}
                onQueryStringChange={(newQueryStringValue) => setQueryString(newQueryStringValue)}
                onPageCountChange={(newPageCount) => setPageCount(newPageCount)}
            />
            {
                repoList && (
                    <ul className="list-group list-group-flush border rounded-3 mt-2">
                        {
                            repoList.map((repo) => (
                                <RepoInfo key={repo.id.toString()} repo={repo}/>
                            ))
                        }
                    </ul>
                )
            }
        </div>
    );
}

export default App;
