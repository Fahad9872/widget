// index.tsx
import { hydrateRoot } from 'react-dom/client';
import { WidgetContainer } from './components/widget-container';
import './styles/style.css';

function initializeWidget() {
  if (document.readyState !== 'loading') {
    onReady();
  } else {
    document.addEventListener('DOMContentLoaded', onReady);
  }
}

function onReady() {
  try {
    const element = document.createElement('div');
    const shadow = element.attachShadow({ mode: 'open' });
    const shadowRoot = document.createElement('div');
    const clientKey = getClientKey();

    shadowRoot.id = 'widget-root';

    const component = <WidgetContainer clientKey={clientKey} />;

    shadow.appendChild(shadowRoot);

    // Clone all existing styles from document (processed by Vite/Tailwind) into shadow DOM
    const styleTags = Array.from(
      document.querySelectorAll('style, link[rel="stylesheet"]'),
    );
    styleTags.forEach((tag) => shadow.appendChild(tag.cloneNode(true)));

    hydrateRoot(shadowRoot, component);
    document.body.appendChild(element);
  } catch (error) {
    console.warn('Widget initialization failed:', error);
  }
}

function getClientKey() {
  const script = document.currentScript as HTMLScriptElement;
  const clientKey = script?.getAttribute('data-client-key');

  if (!clientKey) throw new Error('Missing data-client-key attribute');
  return clientKey;
}

initializeWidget();
