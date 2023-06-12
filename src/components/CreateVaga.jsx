import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import React, { useEffect, useState } from 'react';
import { storage } from '../../firebase/config';
import { v4 } from 'uuid';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';
import axios from 'axios';

function CreateVaga() {
  const [fileList, setFileList] = useState(null);
  useEffect(() => {
    console.log('fileList', fileList);
  }, [fileList]);

  const [modalidade, setModalidade] = useState('');
  const [cidade, setCidade] = useState('');
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [empresa, setEmpresa] = useState('');

  const handleChange = (event) => {
    setModalidade(event.target.value);
  };

  const handleFileChange = (e) => {
    setFileList(e.target.files);
  };

  const uploadImage = async () => {
    // console.log(modalidade, cidade, titulo, descricao, empresa);
    const imageRef = ref(storage, `empresas/${fileList[0].name + v4()}`);
    await uploadBytes(imageRef, fileList[0]).then((snapshot) => {
      console.log('Uploaded a blob or file!', snapshot);
    });
    //  get url image
    const url = await getDownloadURL(imageRef);

    // axios.post('https://xz4kdcpix4.execute-api.sa-east-1.amazonaws.com/usuario/vagas', {
    //   modalidade: modalidade,
    //   cidade: cidade,
    //   titulo: titulo,
    //   descricao: descricao,
    //   empresa: empresa,
    //   logo_empresa: url,
    //   //id a random number from 1 to 10000
    //   id: Math.floor(Math.random() * 10000) + 1,
    // },{
    //   headers: {
    //     Accept: '*/*',
    //     'Access-Control-Allow-Origin': '*',
    //   },
    // })
    //   .then(function (response) {
    //     console.log(response);
    //     alert('Vaga cadastrada com sucesso!');
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    console.log(
      JSON.stringify({
        modalidade: modalidade,
        cidade: cidade,
        titulo: titulo,
        descricao: descricao,
        empresa: empresa,
        logo_empresa: url,
        id: Math.floor(Math.random() * 10000) + 1,
      }),
    );

    alert(
      JSON.stringify({
        modalidade: modalidade,
        cidade: cidade,
        titulo: titulo,
        descricao: descricao,
        empresa: empresa,
        logo_empresa: url,
        id: Math.floor(Math.random() * 10000) + 1,
      }),
    )

    //fetch post request with cors
    //   fetch('https://xz4kdcpix4.execute-api.sa-east-1.amazonaws.com/usuario/vagas', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Access-Control-Allow-Origin': '*',
    //       'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    //       'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
    //     },
    //     body: JSON.stringify({
    //       modalidade: modalidade,
    //       cidade: cidade,
    //       titulo: titulo,
    //       descricao: descricao,
    //       empresa: empresa,
    //       logo_empresa: url,
    //       //id a random number from 1 to 10000
    //       id: Math.floor(Math.random() * 10000) + 1,
    //     }),
    //   })
    //     .then((response) => response.json())
    //     .then((data) => {
    //       console.log('Success:', data);
    //       alert('Vaga cadastrada com sucesso!');
    //     })
    //     .catch((error) => {
    //       console.error('Error:', error);
    //     });

    //     {
    //       "modalidade": "Presencial",
    //       "cidade": "Brasília, DF",
    //       "titulo": "React Junior Developer",
    //       "id": 2,
    //       "descricao": "Como membro do pequeno time de tecnologia da TechIn, você irá participar no desenvolvimento, release e suporte do projeto que estamos desenvolvendo.",
    //       "empresa": "PCD-in"
    // }
  };

  // 👇 files is not an array, but it's iterable, spread to get an array of files
  const files = fileList ? [...fileList] : [];

  return (
    <div className='absolute w-full h-full flex flex-col justify-start items-center gap-10 bg-neutral-200 dark:bg-neutral-900 pt-24'>
      <Box component={'div'} className='w-1/2'>
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>Modalidade</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={modalidade}
            label='Modalidade'
            onChange={handleChange}
            variant='filled'
          >
            <MenuItem value={'Presencial'}>Presencial</MenuItem>
            <MenuItem value={'Remoto'}>Remoto</MenuItem>
            <MenuItem value={'Híbrido'}>Híbrido</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <TextField
        component={'div'}
        className='w-1/2'
        id='filled-basic'
        label='Cidade'
        variant='filled'
        onChange={(e) => setCidade(e.target.value)}
      />
      <TextField
        component={'div'}
        className='w-1/2'
        id='filled-basic'
        label='Cargo da Vaga'
        variant='filled'
        onChange={(e) => setTitulo(e.target.value)}
      />
      <TextField
        component={'div'}
        className='w-1/2'
        id='filled-basic'
        label='Empresa'
        variant='filled'
        onChange={(e) => setEmpresa(e.target.value)}
      />
      <TextField
        component={'div'}
        className='w-1/2'
        id='filled-basic'
        label='Descrição da Vaga'
        variant='filled'
        multiline
        rows={4}
        onChange={(e) => setDescricao(e.target.value)}
      />

      <div class='flex items-center justify-center w-1/2'>
        <label
          for='dropzone-file'
          class='flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600'
        >
          <div class='flex flex-col items-center justify-center pt-5 pb-6 w-full h-full'>
            {fileList !== null ? (
              files.map((file) => (
                <img className='w-1/4' src={URL.createObjectURL(file)} alt={file.name} />
              ))
            ) : (
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
            )}
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
      <div class='flex items-center justify-center w-1/2'>
        <button
          onClick={uploadImage}
          class='px-4 py-2 text-sm transition-colors duration-300 font-medium text-white bg-purple-600 rounded-md hover:bg-purple-500 focus:outline-none focus:bg-purple-500'
        >
          Upload
        </button>
      </div>
    </div>
  );
}

export default CreateVaga;
