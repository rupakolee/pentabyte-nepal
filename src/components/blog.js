export default function Blog(props) {
    return (
    <div className="blog-container">
      <img alt="post1"/>
        <div className="blog-contents">
            <h1>{props.heading}</h1><br/>
            <p>{props.body}</p>
        </div>
    </div>
    )
}