import schema from "./user.model.js"
export function gettask(req,res){
    try {
    const {...movies}=req.body
    console.log(req.body);
    res.status(201).send(schema.create({...movies}));
        
    } catch (error) {
        res.status(404).send(error);
        
    }
    

}
export async function getdata(req,res){
    let task=await schema.find()
    res.status(200).send(task)
}


export async function getdetails(req,res){
    const{id}=req.params;
    console.log(id);
    let Movie=await schema.findOne({_id:id})
    console.log(Movie);
    res.status(200).send(Movie)
}