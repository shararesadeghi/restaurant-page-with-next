import React,{useState} from 'react';
import {useRouter} from 'next/router';
import styles from './CategoriesPage.module.css';

const CategoriesPage = () => {
    const router = useRouter();

    const [query, setQuery] = useState({difficulty:"", time:""});

    const changeHandler = event=>{
        setQuery({...query,[event.target.name]:event.target.value})
    }

    const searchHandler = ()=>{
        router.push({pathname:"/categories", query})
    }
    return (
        <div className={styles.container}>
           <h2>Categories</h2>
           <div className={styles.subContainer}>
               <div className={styles.select}>
                   <select value={query.difficulty} name="difficulty" onChange={changeHandler}>
                       <option vlaue="">Difficulty</option>
                       <option vlaue="Esay">Easy</option>
                       <option vlaue="Medium">Medium</option>
                       <option vlaue="Hard">Hard</option>
                   </select>
                   <select value={query.time} name="time" onChange={changeHandler}>
                       <option value="">Cooking Time</option>
                       <option vlau="more">More than 30 min </option>
                       <option vlaue="less">Less than 30 min</option>
                   </select>
                   <button onClick={searchHandler}>Search</button>
               </div>
           </div>
        </div>
    );
};

export default CategoriesPage;