export function Tags(props){
    
    return(<>{props.tags.map(tag=>{
        return <p key={tag} class="tags">#{tag}</p>
    })}
    </>);
}