export const plans = [
  { id: '1-month', name: 'Discovery', duration: '1 month', months: 1, price: '$14', amount: 14, featured: false },
  { id: '3-months', name: 'Essential', duration: '3 months', months: 3, price: '$24', amount: 24, featured: false },
  { id: '6-months', name: 'Comfort', duration: '6 months', months: 6, price: '$34', amount: 34, featured: false },
  { id: '12-months', name: 'Premium', duration: '12 months', months: 12, price: '$49', amount: 49, featured: true },
];
export function findPlan(id: string | null) { return plans.find(plan => plan.id === id) ?? plans[0]; }
