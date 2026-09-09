'use client';
import {useSyncExternalStore} from 'react';
const key='market-pro-language';
function read(){try {const value=localStorage.getItem(key);return value==='fr'||value==='es'?value:'en';}catch{return 'en';}}
function subscribe(callback:()=>void){window.addEventListener('storage',callback);window.addEventListener('market-pro-language',callback);return ()=>{window.removeEventListener('storage',callback);window.removeEventListener('market-pro-language',callback);};}
export function useLanguage(){return useSyncExternalStore(subscribe,read,()=> 'en' as 'en'|'fr'|'es');}
export function setLanguage(value:'en'|'fr'|'es'){try{localStorage.setItem(key,value);}catch{} window.dispatchEvent(new Event('market-pro-language'));}
