import OrderForm from './order-form';
import {findPlan} from '../plans-data';
export default async function Page({searchParams}:{searchParams:Promise<{plan?:string}>}){const query=await searchParams;const plan=findPlan(query.plan??null);return <OrderForm key={plan.id} initialPlan={plan.id}/>}
