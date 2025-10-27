import { hydrateRoot } from 'react-dom/client';
import { WidgetContainer } from './components/widget-container';

function initializeWidget() {
  if (document.readyState !== 'loading') {
    onReady();
  } else {
    document.addEventListener('DOMContentLoaded', onReady);
  }
}

function onReady() {
  try {
    const wrapper = document.createElement('div');
    const shadow = wrapper.attachShadow({ mode: 'open' });
    const shadowRoot = document.createElement('div');
    shadowRoot.id = 'widget-root';
    shadow.appendChild(shadowRoot);

    const clientKey = getClientKey();

    // Inject compiled CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = import.meta.env.WIDGET_CSS_URL || '/style.css';
    shadowRoot.appendChild(link);

    // Mount React widget
    const component = <WidgetContainer clientKey={clientKey} />;
    hydrateRoot(shadowRoot, component);

    document.body.appendChild(wrapper);
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
