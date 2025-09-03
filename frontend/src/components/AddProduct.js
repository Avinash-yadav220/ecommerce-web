// import React, { useState } from 'react';
// import './AddProductForm.css'; 
// import { useNavigate } from 'react-router-dom';

// export default function AddProductForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     price: '',
//     category: '',
//     stock: ''
//   });
//   const [message, setMessage] = useState('');
//   const [error, setError] = useState('');
// <<<<<<< HEAD
//   const[imagefile,setimagefile]=useState(null)
// =======
//   const[imageFile,setImageFile]=useState(null);
//   const navigate=useNavigate();
// >>>>>>> 58f34e8c26fe8f5626528bf5461e6ad6178bc66d

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };
//   const handlefilechange = (e) => {
//     setimagefile(e.target.files[0])
//   };

//   const handleFileChange = (e) => {
//     setImageFile(e.target.files[0])
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage('');
//     setError('');

//     try {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         throw new Error('You must be logged in as an admin to add products.');
//       }

//     const data=new FormData()
//     data.append('name',formData.name)
//     data.append('description',formData.description)
//     data.append('price',formData.price)
//     data.append('category',formData.category)
//     data.append('stock',formData.stock)
// <<<<<<< HEAD
//     data.append('imageUrl',imagefile)

//     const res = await fetch('http://localhost:5000/api/products/add-product',{
// =======
//     data.append('imageUrl',imageFile)


//       // const config = {
//       //   headers: {
//       //     'Content-Type': 'multipart/form-data',
//       //     'Authorization': `Bearer ${token}`
//       //   }
//       // };

//       const res = await fetch('http://localhost:5000/api/products/add-product',{
// >>>>>>> 58f34e8c26fe8f5626528bf5461e6ad6178bc66d
//         method:'POST',
//         headers:{
//           'Authorization':`Bearer ${token}`
//         },
//         body:data
//        });

       
//     const result = await res.json();

// <<<<<<< HEAD
//     if (!res.ok) throw new Error(result.msg || "Failed to add product");
// =======
//     if (!res.ok) throw new Error(result.msg || "Failed to add product");
// >>>>>>> 58f34e8c26fe8f5626528bf5461e6ad6178bc66d
      
//       setMessage('Product added successfully!');
//       setFormData({
//         name: '', description: '', price: '', category: '', stock: ''
//       });
// <<<<<<< HEAD
//       setimagefile(null)
//       console.log('Product added:', result);
// =======
//       setImageFile(null);
   

//     console.log('Product added:', result);
//     navigate('/')

// >>>>>>> 58f34e8c26fe8f5626528bf5461e6ad6178bc66d
      
//     } catch (err) {
//       if (err.response) {
//         setError(err.response.data.msg);
//       } else {
//         setError(err.message);
//       }
//     }
//   };

//   return (
//     <div className="form-container">
//       <h2>Add New Product</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="name" placeholder="Product Name" value={formData.name} onChange={handleChange} required />
//         <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
//         <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required />
// <<<<<<< HEAD
//         <input type="file" name="imageUrl" placeholder="Image URL" value={formData.imageUrl} onChange={handlefilechange} required />
// =======
//         <input type="file" name="imageUrl" onChange={handleFileChange} required />
// >>>>>>> 58f34e8c26fe8f5626528bf5461e6ad6178bc66d
//         <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} required />
//         <input type="number" name="stock" placeholder="Stock" value={formData.stock} onChange={handleChange} required />
//         <button type="submit">Add Product</button>
//       </form>
//       {message && <p className="success-message">{message}</p>}
//       {error && <p className="error-message">{error}</p>}
//     </div>
//   );
// }











import React, { useState } from 'react';
import './AddProductForm.css';
import { useNavigate } from 'react-router-dom';

export default function AddProductForm() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    stock: ''
  });
  const [imageFile, setImageFile] = useState(null);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('You must be logged in as an admin to add products.');
      }

      const data = new FormData();
      data.append('name', formData.name);
      data.append('description', formData.description);
      data.append('price', formData.price);
      data.append('category', formData.category);
      data.append('stock', formData.stock);
      data.append('imageUrl', imageFile);

      const res = await fetch('http://localhost:5000/api/products/add-product', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: data
      });

      const result = await res.json();

      if (!res.ok) throw new Error(result.msg || "Failed to add product");

      setMessage('Product added successfully!');
      setFormData({
        name: '', description: '', price: '', category: '', stock: ''
      });
      setImageFile(null);
      console.log('Product added:', result);
      navigate('/');
    } catch (err) {
      if (err.response) {
        setError(err.response.data.msg);
      } else {
        setError(err.message);
      }
    }
  };

  return (
    <div className="form-container">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Product Name" value={formData.name} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
        <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required />
        <input type="file" name="imageUrl" onChange={handleFileChange} required />
        <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} required />
        <input type="number" name="stock" placeholder="Stock" value={formData.stock} onChange={handleChange} required />
        <button type="submit">Add Product</button>
      </form>
      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}