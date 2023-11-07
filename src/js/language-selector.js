import { BehaviorSubject, fromEvent } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';

export const languageSubject = new BehaviorSubject('nl');

export const langButtons = document.querySelectorAll('.lang-button');

export const langClick$ = fromEvent(langButtons, 'click').pipe(
    map(event => event.target.dataset.lang),
    distinctUntilChanged()
);

langClick$.subscribe(newLang => {
    languageSubject.next(newLang);
});