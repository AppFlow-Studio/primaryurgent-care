import { LocationsScreens } from '@/components/locationsscreens';
import { PainCareWeTreatData } from '@/components/paincarewetreat';
import { pricingData } from '@/app/pricing/page';
import { conditions } from '@/components/conditions';
import { services } from '@/components/Services';
import { primaryCareServices } from '@/app/primary-care-doctor/page';

const BASE_URL = 'https://wpucc.com';

export async function GET() {
  // Static routes
  const staticRoutes: string[] = [
    '',
    '/appointment',
    '/emergencyroom',
    '/lawyers',
    '/locations',
    '/pain-management-care',
    '/paincare',
    '/pricing',
    '/service',
    '/urgentinjurycare',
    '/primary-care-doctor',
  ];

  // Dynamic routes
  const locationRoutes: string[] = LocationsScreens.map(loc => `/locations/${loc.slug}`);
  const painCareRoutes: string[] = PainCareWeTreatData.map(item => `/paincare/${item.slug}`);
  const pricingRoutes: string[] = pricingData.map(item => `/pricing/${item.slug}`);
  const urgentInjuryCareRoutes: string[] = conditions.map(item => `/urgentinjurycare/${item.slug}`);
  const serviceRoutes: string[] = services.map(item => `/service/${item.slug}`);

  // Add dynamic routes for primary-care-doctor/[slug]
  const primaryCareDoctorRoutes: string[] = primaryCareServices.map((item: { slug: string }) => `/primary-care-doctor/${item.slug}`);

  const allRoutes: string[] = [
    ...staticRoutes,
    ...locationRoutes,
    ...painCareRoutes,
    ...pricingRoutes,
    ...urgentInjuryCareRoutes,
    ...serviceRoutes,
    ...primaryCareDoctorRoutes,
  ];

  const urls = allRoutes.map(
    path => `\n    <url>\n      <loc>${BASE_URL}${path}</loc>\n      <changefreq>weekly</changefreq>\n      <priority>0.8</priority>\n    </url>`
  ).join('');

  const xml = `<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">${urls}\n</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
