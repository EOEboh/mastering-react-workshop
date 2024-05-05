/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

export const NonRecursiveComponent = ({ data = [] }) => {
  return (
    <div className="pl-5">
      {data.map((parent) => {
        return (
          <div key={parent.id}>
            <span>{parent.title}</span>
            {parent.subMenu.map((child) => {
              // rendering sub-menus
              return (
                <div key={child.title} className="pl-5">
                  <span>{child.title}</span>
                  {child.subMenu &&
                    child.subMenu.map((grandChild) => {
                      return (
                        <div key={grandChild.id} className="pl-5">
                          <span>{grandChild.title}</span>
                          {grandChild.subMenu &&
                            grandChild.subMenu.map((greatGrandChild) => {
                              return (
                                <div key={greatGrandChild.id} className="pl-5">
                                  <span>{greatGrandChild.title}</span>
                                </div>
                              );
                            })}
                        </div>
                      );
                    })}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

const RecursiveComponent = ({ data = [] }) => {
  // 👉🏽 create a `useState` boolean called `showNested`
  // This `showNested` state will hold the state for toggling nested links

  const toggleNested = (title) => {
    // 👉🏽 implement the logic for toggling the `showNested` state you created above
  };

  // 👉🏽 once you're done with the above tasks, go ahead and uncomment the markup below

  // return (
  //   <div className="pl-5">
  //     {/* {data.map((parent) => {
  //       return (
  //         <div key={parent.id}>
  //           {parent.isPregnant && (
  //             <button
  //               className="text-white"
  //               onClick={() => toggleNested(parent.title)}
  //             >
  //               {parent.title}
  //             </button>
  //           )}

  //           <span>{parent.title}</span>

  //           <div style={{ display: !showNested[parent.title] && "none" }}>
  //             {parent.isPregnant && (
  //               <RecursiveComponent data={parent.subMenu} />
  //             )}
  //           </div>
  //         </div>
  //       );
  //     })} */}
  //   </div>
  // );
};

// 👉🏽 be sure to uncomment the `isPregnant` boolean properties in the main `megaMenu` array

export default RecursiveComponent;
