import {useSelector} from "react-redux";

const Header = ({name_user}) => {

    const count = useSelector(state => state.postCounts.count)

    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid d-flex justify-content-between px-4">
                    <div className="navbar-brand mb-0 h1">Posts Count: <span className="text-danger">{count}</span></div>
                    <div className="navbar-brand mb-0 h1">{name_user}</div>
                </div>
            </nav>
        </>
    )
}


export default Header;