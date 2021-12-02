import React from 'react'
import {useEffect,useState} from 'react'
import axios from 'axios'

function Home(){
// const fetch_kural = () => {
//      useEffect(() => {
//         const thirukural_url = 'https://api-thirukkural.vercel.app/api?num=2'
    
//         axios.get(thirukural_url).then((res) => {
//           const kuralExp = res.data
//           const kuralLine1 = kuralExp.line1
//           const kuralLine2 = kuralExp.line2
//           const engTrans = kuralExp.eng
//           console.log(kuralExp)
//           console.log(kuralLine1)
//           console.log(kuralLine2)
//           console.log(engTrans)
//         })
//       })
// }
const[kural,setKural] = useState({});
     const fetchapi = async () => {
         try{
        const thirukural_url = 'https://raw.githubusercontent.com/tk120404/thirukkural/master/thirukkural.json'
    
          const kural_api = await axios.get(thirukural_url)
          const kuralLine1 = kural_api.data.data
          const kuralLine2 = kural_api.Line2
          const engTrans = kural_api.Translation
          console.log(kural_api.data)
          console.log(kuralLine1)
          console.log(kuralLine2)
          console.log(engTrans)
          setKural(kural_api.data)
         }
         catch(e){
             console.log(e);
         }
     }
     useEffect(()=>{
         fetchapi();
     },[]);
    return (
        <div>
            <h1>Hello</h1>
            {/* {kural.map((data)=>{
                return (<p>{data.Line1}</p>)
            })} */}
        </div>
    )
      
}
  
export default Home;