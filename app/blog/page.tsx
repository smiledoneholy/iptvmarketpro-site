import type {Metadata} from 'next';
import SiteHeader from '../site-header';
import SiteFooter from '../site-footer';
import {blogPosts} from '../content-data';
import ArticleList from './article-list';
export const metadata:Metadata={title:'Streaming guides: setup, buffering and buying advice',description:'Practical answers about TV subscriptions, Wi-Fi, buffering, media players and setup. Make an informed choice before you pay.',alternates:{canonical:'/blog'}};
export default function Blog(){return <main id="main-content"><SiteHeader active="blog"/><section className="inner-hero"><p className="eyebrow">The Market Pro guide library</p><h1>Watch with<br/><em>more confidence.</em></h1><p>Set up your screen, troubleshoot playback and understand what to check before choosing a subscription.</p></section><section className="section blog-section" data-no-translate><ArticleList posts={blogPosts.map(p=>({slug:p.slug,tag:p.tag,title:p.title,excerpt:p.excerpt,read:p.read,image:p.image}))}/></section><section className="detail-cta"><h2>Ready to compare?</h2><p>See total prices and the checks to make before ordering.</p><a className="button" href="/plans">Compare plans</a></section><SiteFooter/></main>}
