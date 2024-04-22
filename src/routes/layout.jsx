import { NavLink, Outlet } from "react-router-dom";
import "../App.css";

const NAV_ITEMS = [
  { id: 1, text: "home" },
  { id: 2, text: "exercise-01" },
  { id: 3, text: "exercise-02" },
  { id: 4, text: "exercise-03" },
  { id: 5, text: "exercise-04" },
  { id: 6, text: "exercise-05" },
  { id: 7, text: "exercise-06" },
];

export default function Layout() {
  return (
    <div className="flex">
      <div id="sidebar">
        <h1>Mastering React: Crafting Predictable Apps With Precision</h1>

        <nav>
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.text}
                  className={({ isActive, isPending }) =>
                    isActive ? "active" : isPending ? "pending" : ""
                  }
                >
                  {item.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div
        id="detail"
        className="border-2 border-rose-500 border-solid rounded-lg h-[80vh]"
      >
        <Outlet />
      </div>
    </div>
  );
}
