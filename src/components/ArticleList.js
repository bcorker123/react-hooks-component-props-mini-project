import React from 'react'
import Article from './Article'

function ArticleList({posts}){
    const postsMap = posts.map(post=>{
        return <Article key={post.id} post={post}/>
    })
    return <main>
        {postsMap}
    </main>
}

export default ArticleList