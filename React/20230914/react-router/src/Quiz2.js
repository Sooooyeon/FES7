import React from 'react'
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate, Outlet } from 'react-router-dom'

export default function App6() {
    return (
        <BrowserRouter>
        {/* a태그와 Link차이 확인하기 a태그는 새로고침이 일어남. Link는 일어나지 않음! */}
            <a href='/cart'>카트페이지</a>
            <Link to="/"> 홈</Link>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/cart" element={<Cart />}/>
                {/* Outlet은 라우트에서 자식으로 있는 컴포넌트를 꺼내 보여주는 컴포넌트이다. */}
                {/* <Route path="/users/*" element={<Outlet/>}> */}
                <Route path="/users/*" element={<Users />}>
                    {/* 이 안에 중첩할 라우트 들이 들어간다. */}
                    {/* 여기 주소는 /users */}
                    {/* <Route path="" element={<Users/>}/> */}
                    {/* /users/coupon */}
                    <Route path="coupon" element={<CouponPage/>}/>
                    {/* /users/question */}
                    <Route path="question" element={<QuestionPage/>}/>
                    {/* /users/notice */}
                    <Route path="notice" element={<NoticePage/>}/>
                </Route>

                <Route path="/products/:id" element={<ProductDetailPage />}/>
                <Route path="/products/:id/notice" element={<ProductDetailNoticePage />}/>
                
            </Routes>
            {/* /users로 이동하는 버튼! useNavigate 이용하기 */}
            <Button/>
        </BrowserRouter>
    )
}

function Button(){
    const navigate = useNavigate();
    return <button onClick={()=>{navigate("/users")}}>유저보기</button>
}

function HomePage(){
    return <h1>홈페이지</h1>
}

function Cart(){
    return <h1>카트</h1>
}

function Users(){
    return (
    <div>
        <h1>사용자 페이지</h1>
        {/* Outlet은 여기서도 사용 가능! */}
        <Outlet />
    </div>
    )
}

function CouponPage(){
    return <h1>쿠폰</h1>
}

function QuestionPage(){
    return <h1>문의</h1>
}

function NoticePage(){
    return <h1>알림</h1>
}

function ProductDetailPage(){

    const {id} = useParams();

    return <h1>{id}번 페이지</h1>
}

function ProductDetailNoticePage(){

    const {id} = useParams();

    return <h1>공지사항{id}</h1>
}