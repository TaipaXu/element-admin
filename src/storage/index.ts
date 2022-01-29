import Persistent from './persistent';
import Transient from './transient';
import { Storage as LanguageStorage } from './modules/language';
import { Storage as TokenStorage } from './modules/token';

const PersistentStorage = new Persistent();
const TransientStorage = new Transient();

export { PersistentStorage, TransientStorage, LanguageStorage, TokenStorage };
