import 'polymer/polymer-element.html'
import 'polymer/lib/elements/dom-repeat.html'
import '../gdg-logo/gdg-logo.js'
import '../../icons/devfest-icons.html'
import '../../fonts/devfest-fonts.html'
import './devfest-footer.html'

class DevfestFooter extends Polymer.Element {
  static get is () { return 'devfest-footer' }

  static get properties () {
    return {
      footerLinks: {
        type: Array,
        value: [
          {
            href: '#',
            text: '#GDGBaguio'
          },
          {
            href: '#',
            text: '#Devfest17'
          },
          {
            href: '#',
            text: '#DevfestBaguio'
          }
        ]
      },
      contactUs: {
        type: Array,
        value: [
          {
            icon: 'devfest:google-plus',
            href: 'https://plus.google.com/+GdgbaguioBlogspot'
          },
          {
            icon: 'devfest:facebook',
            href: 'https://www.facebook.com/gdgbaguio'
          },
          {
            icon: 'devfest:twitter',
            href: 'https://twitter.com/gdgbaguio'
          },
          {
            icon: 'devfest:youtube',
            href: 'https://www.youtube.com/channel/UCT9dkGk7ti1ok-JPUbXjTCg'
          },
        ]
      }
    }
  }
}

window.customElements.define(DevfestFooter.is, DevfestFooter)

export default DevfestFooter