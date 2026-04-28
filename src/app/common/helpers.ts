export const setCanonicalLinkForIndex = (document: Document, urlPart: string) => {
  let link = document.querySelector('link[rel="canonical"]');
    if (link) {
      link.setAttribute('href', `https://psihoterapie-training.ro/${urlPart}/`);
    } else {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', `https://psihoterapie-training.ro/${urlPart}/`);
      document.head.appendChild(link);
    }
};