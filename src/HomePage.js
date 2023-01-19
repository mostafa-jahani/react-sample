const HomePage = () => {
    return (
        <>
            <div className="container mx-auto mt-5">

                {/* Search Form */}
                <div>
                    <form>
                        <div className="d-flex gap-3">
                            <div>
                                <input type="text" name="search_input" id="search_input" className="form-control flex-grow-1" placeholder="type every word..." />
                            </div>
                            <div>
                                <button type="submit" className="form-control btn btn-primary">Search</button>
                            </div>
                        </div>
                    </form>
                </div>
                {/* Search Form */}



                {/* Table */}
                <div className="w-100 mt-3 p-3">
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Family</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Ali</td>
                                <td>Alavi</td>
                            </tr>

                            <tr>
                                <td>2</td>
                                <td>Hasan</td>
                                <td>Hasani</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* Table */}


                {/* Pagination */}
                <nav className="d-flex justify-content-center">
                    <ul className="pagination">
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item active" aria-current="page">
                            <span className="page-link">2</span>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                    </ul>
                </nav>
                {/* Pagination */}

            </div>
        </>
    )
}


export default HomePage;