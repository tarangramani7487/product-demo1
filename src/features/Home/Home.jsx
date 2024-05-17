import { useEffect } from "react"
import { getAllData } from "./HomeSlice"
import { useDispatch, useSelector } from "react-redux"
import "./Home.css"
// import {  }
// import loading from "./img/loader.gif"
import loaderImage from "./img/loader.gif"
import { Link, Navigate, useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate
    const dispatch = useDispatch()
    const loading = useSelector((state) => state.product.loading)
    const data = useSelector((state) => state.product.data)
    console.log({ loading, data });
    useEffect(() => {
        dispatch(getAllData())
    }, [])
    return (
        <>
            <h1>Products Display</h1>
            <button onClick={() => navigate("/login")} className="login-btn">Login</button>
            <div className="main-wrapper">
                {loading ? <img src={loaderImage} width={800}/>
                    :
                    data?.products?.length > 0 ?
                        data?.products?.map((product, idx) => (
                            <div className="card">
                                <div className="imgBx">
                                    <img src={product.thumbnail} width={200} alt="" />
                                </div>
                                <div className="contextBx">
                                    <h3>{product.title}</h3>
                                    <h2 className="price">${product.price}</h2>
                                    <h2 className="price">rating {product.rating}</h2>
                                    <Link to={'/product/:productsId'} className="buy">Buy now</Link>
                                </div>
                            </div>
                        ))
                        : <div><center>No data found</center></div>
                }
            </div>
        </>
    )
}

export default Home