
const api = "http://localhost:3001"


// Generate a unique token 
/*let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)*/
const token = "abc";

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export  const getAllCategories = () => 
 fetch(`${api}/categories`,{headers})
.then(res=>res.json())
.then(data=>data.categories)

export const getAllPosts = () =>
 fetch(`${api}/posts`,{headers})
.then(res=>res.json())

export const getAllPostsForCategory = (category) =>{
  return (
  fetch(`${api}/${category}/posts`,{headers})
  .then(res=>res.json()))
}

export const getComments = (parentId) =>{
  return (
  fetch(`${api}/posts/${parentId}/comments`,{headers})
  .then(res=>res.json()))
}


export const vote = (id,vote) => 
   fetch(`${api}/posts/${id}`,{
     method: 'POST',
      headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({"option" : vote})
   })
  .then(
    res=>res.json())


export const deletePost = (id) =>
   fetch(`${api}/posts/${id}`,
   { method: 'DELETE',
    headers: {...headers}
   }).then(res=>res.json())

export const createPost = (post) =>
   fetch(`${api}/posts`,{
     method: 'POST',
      headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
   })
  .then(
    res=>res.json())

export const createComment = (comment) =>
   fetch(`${api}/comments`,{
     method: 'POST',
      headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(comment)
   })
  .then(
    res=>res.json())

export const updatePost = (post) =>
   fetch(`${api}/posts/${post.id}`,{
     method: 'PUT',
      headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({title: post.title, body: post.body})
   })
  .then(
    res=>res.json())

    export const updateComment = (comment) =>
    fetch(`${api}/comments/${comment.id}`,{
      method: 'PUT',
       headers: {
       ...headers,
       'Content-Type': 'application/json'
     },
     body: JSON.stringify({body: comment.body, timestamp: comment.timestamp})
    })
   .then(
     res=>res.json())



/* export const get = (bookId) =>
  fetch(`${api}/books/${bookId}`, { headers })
    .then(res => res.json())
    .then(data => data.book)

export const getAll = () =>
  fetch(`${api}/books`, { headers })
    .then(res => res.json())
    .then(data => data.books)

export const update = (book, shelf) =>
  fetch(`${api}/books/${book.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ shelf })
  }).then(res => res.json())

export const search = (query, maxResults) =>
  fetch(`${api}/search`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query, maxResults })
  }).then(res => res.json())
    .then(data => data.books)
    */