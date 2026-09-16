import {notFound} from "next/navigation";
import {frenchMetadata, FrenchPage, frenchSlugs} from "../../french-pages";
export function generateStaticParams(){return frenchSlugs.map(slug=>({slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;return frenchMetadata(slug);}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;if(!frenchSlugs.includes(slug))notFound();return <FrenchPage slug={slug}/>;}
