
const PostsPage = async() => {
    const res = await fetch ('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()
    return (
        <div>
            <h2>post are coming soon: {posts.length}</h2>
        </div>
    );
};

export default PostsPage;