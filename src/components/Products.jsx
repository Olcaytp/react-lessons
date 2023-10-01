import React from 'react'
import {  Route, Routes, Link, useParams, useRoutes , useNavigate } from 'react-router-dom';

const data = [
    {
        id: 0,
        category: 'laptop',
        product: 'Macbook',
        price: 1000,
        explanation: 'This is a Macbook'
    },
    {
        id: 1,
        category: 'laptop',
        product: 'Dell',
        price: 1200,
        explanation: 'This is a Dell'
    },
    {
        id: 2,
        category: 'laptop',
        product: 'Lenovo',
        price: 1400,
        explanation: 'This is a Lenovo'
    }
]

function Products() {
    let { path, url } = useRoutes ();
    return (
        <div className='container'>
            <div className='alert alert-primary' role='alert'>
                <h3 className='text-center'>Welcome to the Products Page</h3>
                <div className='container'>
                    <div className='row'>
                        {
                            data.map((links) => {
                                return (
                                    <div className='col-md-6 mt-3'>
                                    <div class="card" >
                                        <div class="card-body">
                                            <h5 class="card-title">{links.category}</h5>
                                            <p class="card-text">{links.product}</p>
                                            <Link to={`${url}/${links.id}`} class="btn btn-primary">Details</Link>
                                        </div>
                                    </div>
                                </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <Route path={path} exact></Route>
            <Route path={`${path}/:productId`}> <Products/> </Route>
        </div>
    )
}
function Product(){
    let { productId } = useParams();
    let array = data.filter((item) => {
        return item.id === productId;
    });
    console.log(array);

    return(
        <div>
            <div className='alert alert-primary' role='alert'>
                <h3>
                    Category: {array[0].category}
                </h3>
                <h3>
                    Product: {array[0].product}
                </h3>
                <h3>
                    Explanation: {array[0].explanation}
                </h3>
            </div>
        </div>
    )
}

export default Products