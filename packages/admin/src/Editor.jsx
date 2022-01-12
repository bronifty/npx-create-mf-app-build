import React from 'react';
import { useMutation } from 'react-query';
import { postPage } from './api';
const Editor = ({
  title = '',
  text = '',
  img1 = '',
  img2 = '',
  img3 = '',
  page = '',
  onChange = () => {}, // onChange={(k, v) => setFields({ ...fields, [k]: v })}
  host = '',
}) => {
  const { mutate } = useMutation(postPage(host));
  const onSave = () => {
    mutate({ title, text, img1, img2, img3, page });
  };
  return (
    <form>
      <input
        value={title}
        onChange={(e) => onChange('title', e.target.value)}
        placeholder='Title'
        className='block w-full border-gray-300 rounded-md focus:ring-indigo-500 shadow-sm'
      />
    </form>
  );
};

export default Editor;
