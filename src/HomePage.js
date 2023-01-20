import React, {useEffect, useState} from "react";
import Loading from "./components/layouts/Loading";
import {usePostsQuery} from './redux/postApi'
import MyModal from "./components/widgets/MyModal";


const HomePage = () => {

    const {data: posts, isError, error, isLoading, isSuccess} = usePostsQuery()
    const [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    const [selectedPost, setSelectedPost] = useState(null)

    const [initData, setInitData] = useState(posts);
    const [searchChar, setSearchChar] = useState("");

    const [tableData, setTableData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pages, setPages] = useState([]);
    const [pageCount, setPageCount] = useState(1);
    const numOfPage = 5

    useEffect(() => {
        let pCount = initData && Math.ceil(initData.length / numOfPage)
        setPageCount(pCount)

        let pArr = []
        for (let i = 1; i <= pCount; i++) pArr = [...pArr, i]
        setPages(pArr)
    }, [initData]);

    useEffect(() => {
        let start = (currentPage * numOfPage) - numOfPage
        let end = (currentPage * numOfPage)
        setTableData(initData && initData.slice(start, end))
    }, [currentPage, initData]);

    useEffect(() => {
        setInitData(posts && posts.filter(p => p.title.includes(searchChar)))
        setCurrentPage(1)
    }, [searchChar]);


    if (isError) {
        return (
            <div className="m-5">
                <div className="fw-bold text-danger">{error.status}</div>
                <div>{error.error}</div>
            </div>
        )
    }

    if (isLoading) return <Loading/>


    return (
        <>
            <MyModal value={isOpen} closeModal={closeModal} data={selectedPost}/>


            <div className="container mx-auto mt-5">

                {/* Search Form */}
                <div>
                    <form>
                        <div className="d-flex gap-3">
                            <div>
                                <input
                                    type="text"
                                    name="search_input"
                                    id="search_input"
                                    className="form-control flex-grow-1"
                                    placeholder="search in title..."
                                    onChange={(e) => setSearchChar(e.target.value)}
                                />
                            </div>
                            <div>
                                <button type="submit" className="form-control btn btn-primary">Search</button>
                            </div>
                        </div>
                    </form>
                </div>
                {/* Search Form */}


                {isSuccess &&
                    <>
                        {/*Table*/}
                        <div className="w-100 mt-3 p-3">
                            {tableData &&
                                <table className="table table-striped table-hover">
                                    <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Title</th>
                                        <th>Body</th>
                                    </tr>
                                    </thead>

                                    <tbody>
                                    {tableData && tableData.map(post => (
                                        <tr key={post.id} className="cursor-pointer" onClick={() => {
                                            setIsOpen(true)
                                            setSelectedPost(post)
                                        }}>
                                            <td>{post.id}</td>
                                            <td>{post.title.length > 60 ? `${post.title.substring(0, 60)}...` : post.title}</td>
                                            <td>{`${post.body.substring(0, 60)}...`}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            }
                        </div>
                        {/*Table*/}



                        {/* Pagination */}
                        {
                            pages.length > 1 ?
                                (
                                    <nav className="">
                                        <ul className="pagination justify-content-center">
                                            <li className={`page-item cursor-pointer ${currentPage === 1 ? 'disabled' : ''}`}>
                                    <span className="page-link" onClick={() => setCurrentPage(currentPage - 1)}>
                                        Previous
                                    </span>
                                            </li>

                                            {
                                                pages && pages.map(page => (
                                                    <li className="page-item" key={page}>
                                            <span
                                                className={`page-link cursor-pointer ${currentPage === page ? 'active' : ''}`}
                                                onClick={() => setCurrentPage(page)}>
                                                {page}
                                            </span>
                                                    </li>
                                                ))
                                            }

                                            <li className={`page-item cursor-pointer ${currentPage === pageCount ? 'disabled' : ''}`}>
                                    <span className="page-link" onClick={() => setCurrentPage(currentPage + 1)}>
                                        Next
                                    </span>
                                            </li>
                                        </ul>
                                    </nav>
                                ) : null
                        }
                        {/* Pagination */}


                    </>
                }

            </div>
        </>
    )
}


export default HomePage;