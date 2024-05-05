/* eslint-disable no-unused-vars */
// import RecursiveComponent from "../components/recursive/RecursiveComponent";
import { NonRecursiveComponent } from "../components/recursive/RecursiveComponent";

const megaMenu = [
  {
    id: 1,
    // isPregnant: false,
    title: "Home",
    url: "/home",
    subMenu: [],
  },
  {
    id: 2,
    // isPregnant: true,
    title: "Products",
    url: "/products",
    subMenu: [
      {
        id: 3,
        // isPregnant: true,
        title: "Electronics",
        url: "/products/electronics",
        subMenu: [
          {
            id: 4,
            // isPregnant: false,
            title: "Mobile Phones",
            url: "/products/electronics/mobile-phones",
            subMenu: [],
          },
          {
            id: 5,
            // isPregnant: false,
            title: "Laptops",
            url: "/products/electronics/laptops",
            subMenu: [],
          },
        ],
      },
      {
        id: 6,
        // isPregnant: true,
        title: "Clothing",
        url: "/products/clothing",
        subMenu: [
          {
            id: 7,
            // isPregnant: false,
            title: "Men's Clothing",
            url: "/products/clothing/mens",
            subMenu: [],
          },
          {
            id: 8,
            // isPregnant: false,
            title: "Women's Clothing",
            url: "/products/clothing/womens",
            subMenu: [],
          },
        ],
      },
    ],
  },
  {
    id: 9,
    // isPregnant: false,
    title: "About Us",
    url: "/about-us",
    subMenu: [],
  },
  {
    id: 10,
    // isPregnant: false,
    title: "Contact",
    url: "/contact",
    subMenu: [],
  },
];

const Exercise03 = () => {
  // comment-out or delete the `<NonRecursiveComponent />` component rendered below
  // 👉🏽 render the `<RecursiveComponent />` component (imported above)
  // 👉🏽 pass the above array of objects above as props to the `<RecursiveComponent />`
  return <NonRecursiveComponent data={megaMenu} />;
};
// 👉🏽 Head over to the `<RecursiveComponent />` you just rendered and continue instructions there

export default Exercise03;
