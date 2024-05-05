/* eslint-disable react/prop-types */

import { useState } from "react";

const megaMenu = [
  {
    id: 1,
    isPregnant: false,
    title: "Home",
    url: "/home",
    subMenu: [],
  },
  {
    id: 2,
    isPregnant: true,
    title: "Products",
    url: "/products",
    subMenu: [
      {
        id: 3,
        isPregnant: true,
        title: "Electronics",
        url: "/products/electronics",
        subMenu: [
          {
            id: 4,
            isPregnant: false,
            title: "Mobile Phones",
            url: "/products/electronics/mobile-phones",
            subMenu: [],
          },
          {
            id: 5,
            isPregnant: false,
            title: "Laptops",
            url: "/products/electronics/laptops",
            subMenu: [],
          },
        ],
      },
      {
        id: 6,
        isPregnant: true,
        title: "Clothing",
        url: "/products/clothing",
        subMenu: [
          {
            id: 7,
            isPregnant: false,
            title: "Men's Clothing",
            url: "/products/clothing/mens",
            subMenu: [],
          },
          {
            id: 8,
            isPregnant: false,
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
    isPregnant: false,
    title: "About Us",
    url: "/about-us",
    subMenu: [],
  },
  {
    id: 10,
    isPregnant: false,
    title: "Contact",
    url: "/contact",
    subMenu: [],
  },
];

const RecursiveComponent = ({ data = [] }) => {
  const [showNested, setShowNested] = useState(false);

  // handle show/hide functionality
  const toggleNested = (title) => {
    setShowNested({ ...showNested, [title]: !showNested[title] });
  };

  return (
    <div className="pl-5">
      {data.map((parent) => {
        return (
          <div key={parent.id}>
            {parent.isPregnant && (
              <button
                className="text-white"
                onClick={() => toggleNested(parent.title)}
              >
                {parent.title}
              </button>
            )}

            <span>{parent.title}</span>
            {/* Base Condition and Rendering recursive component from inside itself */}
            <div style={{ display: !showNested[parent.title] && "none" }}>
              {parent.isPregnant && (
                <RecursiveComponent data={parent.subMenu} />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Exercise03Final = () => {
  return <RecursiveComponent data={megaMenu} />;
};

export default Exercise03Final;
