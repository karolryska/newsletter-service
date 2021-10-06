import { useState, useEffect } from "react";

const SubscribersList = () => {
    const [data, setData] = useState([]);

    const updateRecords = () => {
        fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_BASE_KEY}/subscribers?api_key=${process.env.REACT_APP_API_KEY}`)
        .then(response => response.json())
        .then(response => {
            setData(response.records);
        })
        .catch(error => console.log(error))
    }

    useEffect(() => {
        updateRecords();
    }, []);

    return (
        <ul>
            {data && data.map(record => (
                <li key={record.id}>
                    <p>{record.fields.name}</p>
                    <p>{record.fields.email}</p>
                </li>
            ))}
        </ul>
    )
};

export default SubscribersList;