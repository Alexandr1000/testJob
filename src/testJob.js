import React, { useEffect, useState } from "react";




const myPromise = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("hello world");
    }, 3000);

});



export function MyComp() {
    const animals = [
        { id: 1, animal: "Dog" },
        { id: 2, animal: "Bird" },
        { id: 3, animal: "Cat" },
        { id: 4, animal: "Mouse" },
        { id: 5, animal: "Horse" },
        { id: 6, animal: "Dog" },
        { id: 7, animal: "Bird" },
        { id: 8, animal: "Cat" },
        { id: 9, animal: "Mouse" },
        { id: 10, animal: "Dog" },
        { id: 11, animal: "Bird" },
        { id: 12, animal: "Cat" },
        { id: 13, animal: "Mouse" },
        { id: 14, animal: "Dog" },
        { id: 15, animal: "Bird" },
        { id: 16, animal: "Cat" },
        { id: 17, animal: "Mouse" },
        { id: 18, animal: "Mouse2" },
        { id: 19, animal: "Mouse3" },
        { id: 20, animal: "Mouse4" }
      ];

    const [myVal, setMyVal] = useState('');

    const loadData = async () => {

        try {

            const res = await myPromise();

            setMyVal(res);

        } catch (e) {

            console.log(e);
        }

    };


    useEffect(() => {
        loadData();
    }, []);

    return (<div>

            <div> {
                myVal
            } </div> 

          <select size="10" multiple>
            {animals.map(item => (
              <option key={item.id}>{item.animal}</option>
            ))}
          </select>
        </div>
)
};

export default MyComp;

