import { APP_DISPLAY_NAME } from '../core/app-brand';
import { AboutDialog as UpstreamAboutDialog } from '@/upstream/ui';

export class AboutDialog extends UpstreamAboutDialog {
  protected override createBody(): HTMLElement {
    const body = super.createBody();
    const version = body.querySelector('.about-version');

    const hopVersion = document.createElement('div');
    hopVersion.className = 'about-hop-version';
    hopVersion.textContent = `${APP_DISPLAY_NAME} ${__HOP_VERSION__}`;

    if (version?.parentNode) {
      version.parentNode.insertBefore(hopVersion, version.nextSibling);
    } else {
      body.appendChild(hopVersion);
    }

    return body;
  }
}
