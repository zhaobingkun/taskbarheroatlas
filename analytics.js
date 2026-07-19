(() => {
  const measurementId = window.TBH_ANALYTICS_ID;
  const isCanonicalProductionHost = window.location.protocol === 'https:' && window.location.hostname === 'taskbarheroatlas.com';

  if (!isCanonicalProductionHost || !/^G-[A-Z0-9]+$/i.test(measurementId || '')) return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.append(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', measurementId, { anonymize_ip: true });
})();
