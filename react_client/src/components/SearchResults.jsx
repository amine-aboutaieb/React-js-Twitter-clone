import React from 'react';
import {Link} from 'react-router-dom';

const SearchResults = ({data})=>{
        return (
            <div style={{backgroundColor:"teal",color:'white'}}>
                {
                    (data.length > 0) ? (
                        data.map((item,index)=>{
                            return <div key={index}><Link to={`/profile/${item.userName}`}>{item.userName}</Link></div>
                        })
                    ) : 
                    (<p>Nothing</p>)
                }
            </div>
        );
    
}

export default SearchResults;