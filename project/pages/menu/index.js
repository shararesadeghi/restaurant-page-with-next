import React from 'react';
import MenuPage from '../../components/templates/MenuPage';

const Menu = ({data}) => {
    return (
        <MenuPage data={data}/>
    );
};

export default Menu;

export async function getStaticProps(){
    const res = await fetch("https://api-vihanfood.vercel.app/data");
    const data = await res.json();
    return{
        props:{data},
        revalidate: 1 * 60 * 60,
    }
}