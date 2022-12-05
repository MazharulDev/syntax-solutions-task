import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddContent = () => {
    const [loading, setLoading] = useState(false)
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const img = data.img[0];
        const formData = new FormData();
        formData.append('image', img);
        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgStore}`;
        fetch(url, {
            method: 'POST',
            body: formData

        })
            .then(res => res.json())
            .then(result => {
                const img = result.data.url;
                const content = {
                    name: data.title,
                    details: data.details,
                    img: img
                }
                //send database
                setLoading(true)
                fetch('https://syntax-solutions.onrender.com/content', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(content)
                })
                    .then(res => res.json())
                    .then(output => {
                        if (output.insertedId) {
                            setLoading(false)
                            toast.success('Content added successfully')
                            reset();
                        } else {
                            toast.error('Failed added Content')
                        }
                    })
            })

    };
    return (
        <div className='margin-top'>
            <section id="breadcrumbs" class="breadcrumbs">
                <div class="container">

                    <div class="d-flex justify-content-between align-items-center">
                        <h2>Add Content</h2>
                        <ol>
                            <li><a href="index.html">Home</a></li>
                            <li>addContent</li>
                        </ol>
                    </div>

                </div>
            </section>
            <div class="col-lg-8 pt-5 mt-lg-0 d-flex justify-content-center w-100">

                <form onSubmit={handleSubmit(onSubmit)} class="php-email-form">
                    <div class="row">
                        <div>
                            <input {...register("title")} type="text" class="form-control" placeholder="Type title here" required />
                        </div>
                    </div>
                    <div class="row">
                        <div class="mt-3">
                            <textarea {...register("details")} type="password" class="form-control" placeholder="Type Details here" required />
                        </div>
                    </div>
                    <div class="row">
                        <div class="mt-3">
                            <label className='font-weight-bold mb-1' htmlFor="img">Add Image</label>
                            <input {...register("img")} type="file" class="form-control" name="img" required />
                        </div>
                    </div>

                    {loading ? <p className='text-center'>Adding Content</p> : <div class="text-center my-3"><button className='btn btn-danger' type="submit">Add Content</button></div>}
                </form>

            </div>
        </div>
    );
};

export default AddContent;