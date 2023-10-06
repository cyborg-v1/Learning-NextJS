export default async function(){
  await new Promise((res,rej)=>{
    setTimeout(res,4000)
  })
}