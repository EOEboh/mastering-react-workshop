import { NavLink, Outlet } from "react-router-dom";
import "../App.css";

const NAV_ITEMS = [
  { id: 1, text: "Home", to: "/home" },
  { id: 2, text: "Exercise 1", to: "/exercise-01" },
  { id: 3, text: "Exercise 2", to: "/exercise-02" },
  { id: 4, text: "Exercise 3", to: "/exercise-03" },
  { id: 5, text: "Exercise 4", to: "/exercise-04" },
  { id: 6, text: "Exercise 5", to: "/exercise-05" },
  { id: 7, text: "Exercise 6", to: "/exercise-06" },
  { id: 8, text: "Exercise 7", to: "/exercise-07" },
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
                  to={item.to}
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
