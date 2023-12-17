import React,{lazy,Suspense} from 'react';

import  LazyComponent from '../components/LazyLoadedComponent'

const promise=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('yes suspense is resolved ')
        
    }, 1000);
})



const SuspenseComp=()=>{
    return <>
    <Suspense fallback={<div>..Loading</div>}>
        <LazyComponent data={promise}/>
    </Suspense>

    </>
}

export default SuspenseComp;