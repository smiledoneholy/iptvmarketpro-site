"use client";

import { FormEvent, useState } from "react";
import SiteHeader from "../site-header";

const offers = ["Discovery — 1 month — $14", "Essential — 3 months — $24", "Comfort — 6 months — $34", "Premium — 12 months — $49"];

export default function OrderPage() {
  const [submitted, setSubmitted] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = ["Hello Market Pro, I would like to place an order.", "", `Name: ${form.get("name")}`, `WhatsApp: ${form.get("whatsapp")}`, `Selected offer: ${form.get("offer")}`, "", "Please send me the PayPal payment link."].join("\n");
    setSubmitted(true);
    window.location.assign(`https://wa.me/212638647729?text=${encodeURIComponent(message)}`);
  }
  return <main><SiteHeader />
    <section className="order-hero"><p className="eyebrow light"><span /> Start your order</p><h1>One last step.<br /><em>You’re almost ready.</em></h1><p>Choose your offer and send your request securely via WhatsApp. We will send you a PayPal payment link after checking your order.</p></section>
    <section className="section order-section"><div className="order-info"><p className="eyebrow"><span /> Simple & secure</p><h2>Your order,<br /><em>your choice.</em></h2><p>We ask only for the details needed to respond to your request. We do not collect card details on this website.</p><div className="order-steps"><div><b>01</b><span>Send your order request on WhatsApp</span></div><div><b>02</b><span>Receive your individual PayPal payment link</span></div><div><b>03</b><span>Receive authorised service details after confirmed payment</span></div></div></div>
      <form className="order-form" onSubmit={submit}><label>Name<input name="name" required autoComplete="name" placeholder="Your name" /></label><label>WhatsApp number<input name="whatsapp" required inputMode="tel" autoComplete="tel" placeholder="e.g. +212 6 XX XX XX XX" /></label><label>Selected offer<select name="offer" defaultValue={offers[3]}>{offers.map((offer) => <option key={offer} value={offer}>{offer}</option>)}</select></label><label className="order-consent"><input type="checkbox" required /><span>I agree to be contacted on WhatsApp about this order.</span></label><button className="button" type="submit">Continue on WhatsApp <span>→</span></button>{submitted && <p className="form-note">Opening WhatsApp with your order details…</p>}<p className="order-disclaimer">By continuing, you confirm that you will use the service only with content you are authorised to access.</p></form>
    </section></main>;
}
