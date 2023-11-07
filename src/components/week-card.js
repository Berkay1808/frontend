import { LitElement, html } from 'lit';
import { getDatabase, ref, get } from 'firebase/database';

export class WeekCard extends LitElement {
  constructor() {
    super();
    this.daysData = {};
    this.fetchData(); // Fetch the data from Firebase
  }

  async fetchData() {
    const database = getDatabase();
    const databaseRef = ref(database, '/days');
    try {
      const snapshot = await get(databaseRef);
      if (snapshot.exists()) {
        this.daysData = snapshot.val();
        this.requestUpdate(); // Trigger a re-render
      } else {
        console.error('No data available');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }


  sortDayKeys() {
    const dayKeys = Object.keys(this.daysData);
    dayKeys.sort((a, b) => {
      const idA = this.daysData[a].id || 0;
      const idB = this.daysData[b].id || 0;
      return idA - idB;
    });
    return dayKeys;
  }

  renderDayCards() {
    const dayKeys = this.sortDayKeys();

    return dayKeys.map(day => html`
      <day-card
        id="${this.daysData[day].id || ''}"
        day="${day}"
        travel_type="${this.daysData[day].travel_type || ''}"
        km_distance="${this.daysData[day].km_distance || ''}"
      ></day-card>
    `);
  }

  render() {
    return html`
      ${this.renderDayCards()}
    `;
  }
}

window.customElements.define('week-card', WeekCard);
