import React, {useState} from 'react';



const myPromise = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("result");
    }, 3000);

});

promise 
    .then(result => {"hello world"}),
    error => false





export function MyComp() {

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
            } </div> )

        </div>)
};

export default App;

