

export async function GET(request:Request,{params}:{params:{time:string}}){  
    const obj:any = {};
    // console.log(params)
    let array = [];
    for (let index = 1; index <= Number(params.time); index++) {
        const key = `msg${index}`
        obj[key] = `Hello message ${index}`

    }
    
    return Response.json(obj);
}