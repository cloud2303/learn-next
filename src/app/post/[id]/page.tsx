function Page({params}:{params:{id:string}}){
  return <>hello{params.id}</>
}
export default Page;

export async function generateStaticParams(){
  return [{id:'1'},{id:'2'}]
}