import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Admin.css';

const Admin = props => {

  const [pages, setPages] = useState({
    title: '',
    content: '',
  });

  const [options, setOptions] = useState({
    page: '',
  });

  const handleSelectChange = (e) => {
    setOptions({
      ...pages,
      page: e.target.value,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://burger-project-01.firebaseio.com/pages/${options.page}.json`);
      setPages(response.data);
    };

    fetchData().catch(console.error);
  }, [options.page]);

  const handlePageChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setPages(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const editPage = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `https://burger-project-01.firebaseio.com/pages/${options.page}.json`,
        pages);
    } finally {
      props.history.replace(`${options.page}`);
    }
  };

  return (
    <div className='form'>
      <h1>Edit pages</h1>
      <form
        onSubmit={(e) => editPage(e)}
      >
        <div className='select'>
          <label htmlFor="select">Select pages</label>
          <select
            name='page'
            id='select'
            onChange={(e) => handleSelectChange(e)}
          >
            <option value='' hidden>Select One</option>
            <option value="about">About</option>
            <option value="contacts">Contacts</option>
            <option value="divisions">Divisions</option>
            <option value="partners">Partners</option>
            <option value="settings">Settings</option>
          </select>
        </div>
        <div className='title'>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id='title'
            name='title'
            value={pages.title}
            onChange={(e) => handlePageChange(e)}
          />
        </div>
        <div className='content'>
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            cols="30"
            rows="10"
            name='content'
            value={pages.content}
            onChange={(e) => handlePageChange(e)}
          />
        </div>
        <button>Save</button>
      </form>
    </div>
  );
};

export default Admin;