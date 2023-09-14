import React from 'react'
import { BrowserRouter, Routes, Route, Link, useParams, Outlet  } from 'react-router-dom'

export default function Quiz() {
    return (
        <BrowserRouter>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/users">Users</Link>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products/:id" element={<Products />} />
                <Route path="/products/:id/notice" element={<ProductsNotice />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/users/*" element={<Outlet />} >
                    <Route path="" element={<Users/>}/>
                    <Route path="coupon/" element={<Coupon />}/>
                    <Route path="question/" element={<Question />}/>
                    <Route path="notice/" element={<Notice />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )


    function HomePage(){
        return <h1>홈페이지</h1>
    }
    function Products(){

	// const location = useLocation();

    const {id} = useParams();

    return <h1>제품{id} 목록 페이지입니다.</h1>
        
    }

    function ProductsNotice(){

        const {id} = useParams();

        return <h1>제품{id} 공지사항 페이지입니다.</h1>
    }


    function Cart(){
        return <h1>장바구니</h1>
    }

    function Users(){
	// const location = useLocation();
        return <h1>마이페이지</h1>
    }
    
    function Coupon(){
        return <h1>쿠폰</h1>
    }
    function Question(){
        return <h1>문의</h1>
    }

    function Notice(){
        return <h1>회원 공지사항</h1>
    }
}
