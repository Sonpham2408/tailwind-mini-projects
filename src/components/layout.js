import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul className="flex justify-center flex-wrap">
          <li className="px-4 py-2 bg-white text-black text-center m-3 rounded-full border border-black">
            <Link to="/product">Product</Link>
          </li>
          <li className="px-4 py-2 bg-white text-black text-center m-3 rounded-full border border-black">
            <Link to="/email">Email</Link>
          </li>
          <li className="px-4 py-2 bg-white text-black text-center m-3 rounded-full border border-black">
            <Link to="/gallery">Gallery</Link>
          </li>
          <li className="px-4 py-2 bg-white text-black text-center m-3 rounded-full border border-black">
            <Link to="/quotes">Quotes</Link>
          </li>
          <li className="px-4 py-2 bg-white text-black text-center m-3 rounded-full border border-black">
            <Link to="/clipboard">Clipboard</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;