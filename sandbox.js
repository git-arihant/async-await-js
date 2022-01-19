fetch('todos/luigi.json').then(response=>{
    console.log('resolvedr',response);
    return response.json();  //returns promise
}).then(data=>{
    console.log(data);
}).catch(err=>{
    console.log('error:',err);
})