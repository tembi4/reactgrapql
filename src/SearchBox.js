const SearchBox = ({
                       queryString, totalCount, pageCount, onQueryStringChange, onPageCountChange
                   }) => {
    return (
        <div className="d-flex align-items-center bg-light px-3 py-2 small rounded-3">
            <div className="d-flex align-items-center flex-grow-1">
                <label htmlFor="queryString" className="me-2 fw-bold text-secondary">Search</label>
                <input id="queryString"
                       className="form-control form-control-sm me-2"
                       type="text"
                       value={queryString}
                       onChange={(event) => {
                           onQueryStringChange(event.target.value)
                       }}
                />
            </div>
            <div className="d-flex align-items-center flex-grow-1">
                <label htmlFor="pageCount"
                       className="me-2 fw-bold text-secondary">Show</label>
                <input
                    id="pageCount" className="form-control form-control-sm me-2"
                    type="number"
                    min="1"
                    max="100"
                    value={pageCount}
                    onChange={(event) => {onPageCountChange(event.target.value)}}
                />
            </div>
            <div className="d-flex align-items-center">
                <b className="me-2 text-secondary">Total:</b>
                <span className="p-1 badge text-bg-primary">
                    {totalCount}
                </span>
            </div>
        </div>);
}

export default SearchBox