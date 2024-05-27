import { useEffect, useState } from 'react';
import { db } from '@/utils/firebase';
import { collection, getDocs } from 'firebase/firestore';

const UrlList = () => {
    const [urls, setUrls] = useState([]);

    useEffect(() => {
        const fetchUrls = async () => {
            const querySnapshot = await getDocs(collection(db, 'urls'));
            const urlList = querySnapshot.docs.map(doc => doc.data().url);
            setUrls(urlList);
        };

        fetchUrls();
    }, []);

    return (
        <div>
            <h1>Saved URLs</h1>
            <ul>
                {urls.map((url, index) => (
                    <li key={index}>{url}</li>
                ))}
            </ul>
        </div>
    );
};

export default UrlList;
