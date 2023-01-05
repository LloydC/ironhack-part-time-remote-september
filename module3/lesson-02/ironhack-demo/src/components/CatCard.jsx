function CatCard(props){
    const { cat } = props;
    return(
        <div>
            <h5>{cat.name}</h5>
            <img alt={'cat_image'} src={cat.imageUrl} style={{width: '50px', height: '50px', borderRadius: '75%'}} />
            {/* {cat.showsAffection === true && <p>A caring cat</p>}
            {cat.showsAffection === false && <p>Not a caring cat</p>} */}
            {cat.showsAffection ? <p>A caring cat</p> : <p>Not a caring cat</p>}
        </div>
    )
}

export default CatCard;