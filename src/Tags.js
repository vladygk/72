export function Tags(props){
    
    return(<>{props.tags.map(tag=>{
        return <div key={tag} class="tag">#{tag}</div>
    })}
    </>);
}