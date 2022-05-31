import { Link, Outlet } from "react-router-dom"

function DefaultHOC() {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-sm bg-light">
                    <div className="container-fluid">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/tasks"> Tasks </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/addtasks"> Add Tasks </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>

            </footer>
        </>
    )
}

export default DefaultHOC