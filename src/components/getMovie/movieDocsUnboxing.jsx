
export const MovieDocsUnboxing = (object)=>{
    if(object && object !==null){
        return object.map(({name})=>{return [name] }).toString()
    }
    
}