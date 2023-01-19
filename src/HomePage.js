import React, {useEffect, useState} from "react";
import axios from "axios";
import Loading from "./components/layouts/Loading";
import {usePostsQuery} from './redux/postApi'
import MyModal from "./components/widgets/MyModal";

const HomePage = () => {

    // const [posts, setPosts] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    //
    // useEffect(() => {
    //     axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
    //         setPosts(response.data)
    //         setLoading(false)
    //         setError(null)
    //     }).catch(err => {
    //         setError(err.message)
    //         setLoading(false)
    //     })
    // }, []);

    const {data: posts, isError, error, isLoading, isSuccess} = usePostsQuery()
    const [isOpen, setIsOpen] = useState(false)
    function closeModal() {setIsOpen(false)}
    const [selectedPost, setSelectedPost] = useState(null)

    if (isError) {
        return (
            <div className="m-5">
                <div className="fw-bold text-danger">{error.status}</div>
                <div>{error.error}</div>
            </div>
        )
    }

    if (isLoading) return <Loading />



    return (
        <>

            <button className="btn btn-primary" onClick={() => {
                setIsOpen(true)
            }}>Open Modal</button>

            <MyModal value={isOpen} closeModal={closeModal} data={selectedPost}/>


            <div className="container mx-auto mt-5">

                {/* Search Form */}
                <div>
                    <form>
                        <div className="d-flex gap-3">
                            <div>
                                <input type="text" name="search_input" id="search_input" className="form-control flex-grow-1" placeholder="type every word..."/>
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
                            {posts &&
                                <table className="table table-striped table-hover">
                                    <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Title</th>
                                        <th>Body</th>
                                    </tr>
                                    </thead>

                                    <tbody>
                                    {posts && posts.map(post => (
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

                        {/*Pagination*/}
                        <nav className="d-flex justify-content-center">
                            <ul className="pagination">
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item active" aria-current="page">
                                    <span className="page-link">2</span>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                            </ul>
                        </nav>
                        {/*Pagination*/}
                    </>
                }

            </div>
        </>
    )
}


export default HomePage;