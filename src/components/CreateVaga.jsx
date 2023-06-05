import React, { useEffect, useState } from 'react';

function CreateVaga() {
  const [fileList, setFileList] = useState(null);

  const handleFileChange = (e) => {
    setFileList(e.target.files);
    console.log(e.target.files);
  };

  const handleUploadClick = () => {
    if (!fileList) {
      return;
    }

    // 👇 Create new FormData object and append files
    const data = new FormData();
    files.forEach((file, i) => {
      data.append(`file-${i}`, file, file.name);
    });

    // 👇 Uploading the files using the fetch API to the server
    fetch('https://httpbin.org/post', {
      method: 'POST',
      body: data,
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };

  // 👇 files is not an array, but it's iterable, spread to get an array of files
  const files = fileList ? [...fileList] : [];

  return (
    <div className='absolute w-full h-full flex flex-col justify-start items-center gap-20'>
      <div className='w-1/2'>
        <label for='message' class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
          DESCRIÇÂO DA VAGA
        </label>
        <textarea
          id='message'
          rows='4'
          class='block p-2.5 w-full  text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='DESCRIÇAO DA VAGA, TEXTO LIVRE RESUMO'
        ></textarea>
      </div>

      <div class='flex items-center justify-center w-1/2'>
        <label
          for='dropzone-file'
          class='flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600'
        >
          <div class='flex flex-col items-center justify-center pt-5 pb-6'>
            <>
              <svg
                aria-hidden='true'
                class='w-10 h-10 mb-3 text-gray-400'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
                ></path>
              </svg>
              <p class='mb-2 text-sm text-gray-500 dark:text-gray-400'>
                <span class='font-semibold'>Click to upload</span> or drag and drop
              </p>
              <p class='text-xs text-gray-500 dark:text-gray-400'>
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </>

            {files.map((file) => (
              <img className='w-24' src={URL.createObjectURL(file)} alt={file.name} />
            ))}
          </div>
          <input
            id='dropzone-file'
            type='file'
            class='hidden'
            multiple
            onChange={handleFileChange}
          />
        </label>
      </div>
    </div>
  );
}

export default CreateVaga;
