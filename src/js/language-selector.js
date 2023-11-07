import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

const langButtons = document.querySelectorAll('.lang-button');

const langClick$ = fromEvent(langButtons, 'click').pipe(
    map(event => event.target.dataset.lang)
);

export default langClick$;