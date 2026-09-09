import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Request your TV subscription', description: 'Choose your duration, confirm device compatibility and request your individual payment link from Market Pro.', alternates: { canonical: '/order' }, robots: { index: false, follow: true } };
export default function Layout({children}: {children: React.ReactNode}) { return children; }
