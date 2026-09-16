"use client";
import {useLanguage} from "./language-preference";

export function trackWhatsApp(placement: string, plan?: string) {
  const analytics = window as Window & {gtag?: (...args: unknown[]) => void};
  // Count the click only: opening WhatsApp does not confirm a message or a sale.
  analytics.gtag?.("event", "whatsapp_click", {placement, ...(plan ? {plan} : {})});
}

export default function WhatsAppContact({locale}: {locale?: "en" | "fr" | "es"}) {
  const preference = useLanguage();
  const lang = locale ?? preference;
  const copy = {
    en: {title:"Not sure which plan fits your device?", text:"Ask us about your device, the channels you need and the total price before you order. No payment needed to ask a question.", button:"Ask on WhatsApp", message:"Hello Market Pro, I would like to check device compatibility and channel availability before choosing a plan."},
    fr: {title:"Quelle offre choisir pour votre appareil ?", text:"Vérifiez avec nous votre appareil, les chaînes souhaitées et le prix total avant de commander. Aucun paiement nécessaire pour poser une question.", button:"Discuter sur WhatsApp", message:"Bonjour Market Pro, je souhaite vérifier la compatibilité de mon appareil et la disponibilité des chaînes avant de choisir une offre."},
    es: {title:"¿Qué plan funciona con tu dispositivo?", text:"Consulta la compatibilidad, los canales y el precio total antes de pedir. No necesitas pagar para hacer una pregunta.", button:"Consultar por WhatsApp", message:"Hola Market Pro, quiero confirmar la compatibilidad de mi dispositivo y los canales antes de elegir un plan."}
  }[lang];
  const href = `https://wa.me/212638647729?text=${encodeURIComponent(copy.message)}`;
  return <aside className="whatsapp-contact" data-no-translate aria-label={copy.button}>
    <div><h2>{copy.title}</h2><p>{copy.text}</p><a className="button" href={href} target="_blank" rel="noopener noreferrer" onClick={()=>trackWhatsApp("before_footer")}>{copy.button} ↗</a></div>
    <a className="whatsapp-float" href={href} target="_blank" rel="noopener noreferrer" onClick={()=>trackWhatsApp("floating_button")}>{copy.button} ↗</a>
  </aside>;
}
