export function Tags(props){
    
    return(<>{props.tags.map(tag=>{
        return <p class="tags">#{tag}</p>
    })}
    </>);
}