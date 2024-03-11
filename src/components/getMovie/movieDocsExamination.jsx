export const MovieDocsImgExamination =(docs)=>{
        if(docs && docs !==null){
            if(docs.url && docs.url  !==null){
                return(docs.url) 
            }else{
                return(docs) 
            }
        }else{
            return("--")
        }
}