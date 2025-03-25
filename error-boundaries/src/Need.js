import React from 'react';

const Need = () => {

    const [data, setData] = React.useState([]);

    const handleClick = () => {

        let dataFromAPI = [
            {id: 1, name: 'Harry Potter'},
            {id: 2, name: 'Ron Weasley'},
            {id: 3, name: 'Hermonie Granger'}
        ];

        // let dataFromAPI = null;
        
        setData(dataFromAPI);
        // if (dataFromAPI) {
        //     console.log(dataFromAPI[0]?.name);
        // }

        // try {
        //     console.log(dataFromAPI[0]?.name);
        // } catch(error) {
        //     console.log(error);
        // }
        

    }

    return (
        <div>
            <button onClick={handleClick}>Get Data</button>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Need;