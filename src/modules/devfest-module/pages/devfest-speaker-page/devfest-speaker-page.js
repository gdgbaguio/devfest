import 'polymer/polymer-element.html'
import 'marked-element/marked-element.html'
import '../../fonts/devfest-fonts.html'
import '../../icons/devfest-icons.html'
import '../../components/devfest-footer/devfest-footer.js'
import './devfest-speaker-page.html'
import contentLoaderMixin from '../../../content-loader/content-loader-mixin.js'
import app from '../../../../app'
import marked from 'marked'
window.marked = window.marked || marked

class DevfestSpeakerPage extends contentLoaderMixin(Polymer.Element) {
  static get is () { return 'devfest-speaker-page' }

  static get properties () {
    return {
      body: {
        type: String
      },
      speakers: {
        type: Object,
        value: {}
      },
      sessions: {
        type: Object,
        value: {}
      }
    }
  }

  static get observers () {
    return [
      'reload(params.id)'
    ]
  }

  constructor () {
    super()
    this._app = app
  }

  connectedCallback () {
    super.connectedCallback()
    if (this.params && this.params.id) {
      this.reload()
    }
    // this._fetchContent('pages/speakers.md')
  }

  reload() {
    if (this.params.id) {
      this._fetchContent(`speakers/bio/${this.params.id}.md`)
    }
    this._fetchJson('speakers/speakers.json', 'speakers')
    this._fetchJson('sessions/sessions.json', 'sessions')
    this._fetchJson('sessions/sessions-type.json', 'sessionsType')
    this._fetchJson('schedule/schedule.json', 'schedule')
  }

  _getInfo(id, attribute) {
    if (this.speakers[id]) {
      return this.speakers[id][attribute]
    }
  }

  _checkSessions(id) {
    // console.log(this.speakers[id].sessions.length)
    return this.speakers[id] && this.speakers[id].sessions.length > 0
  }

  _getSession(id, attribute) {
    if (this.sessions[id]) {
      return this.sessions[id][attribute]
    }
  }

  _getTime(id) {
    if (this.schedule && this.sessions[id]) {
      var schedule = this.sessions[id].schedule
      for (var i in this.schedule) {
        if (this.schedule[i].id === schedule) {
          return (this.schedule[i].start + ':00') + ' - ' + (this.schedule[i].end + ':00')
        }
      }
    }
  }
}

window.customElements.define(DevfestSpeakerPage.is, DevfestSpeakerPage)

export default DevfestSpeakerPage