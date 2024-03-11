import { GetMoviesHeader }from "../../pages/getMovies/getMoviesHeader"



export const GetMoviesBody =({movies})=>{

    return(
        <>  

            {movies.map(({...otherProps})=>{
                return <GetMoviesHeader key={otherProps.id}  {...otherProps} />
            })}

            
        
        </>
    )
}