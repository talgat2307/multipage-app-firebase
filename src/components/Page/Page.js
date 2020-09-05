import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Page = props => {
  const [page, setPages] = useState({
    title: '',
    content: ''
  })

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://burger-project-01.firebaseio.com/pages/${props.page}.json`);
      setPages(response.data);
    };

    fetchData().catch(console.error);
  }, [props.page]);

  return (
    <div className='page'>
      <h1>{page.title}</h1>
      <p>{page.content}</p>
    </div>
  );
};

export default Page;