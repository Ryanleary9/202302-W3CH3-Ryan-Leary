import { Header } from './components/header/header';
import { Tasks } from './components/tasks/task';
import { PET } from './mocks/mockpets';
import { Footer } from './components/footer/footer';
import './index.scss';

console.log('Load sample.');
new Header('#root');
new Tasks('main', PET);
new Footer('#footer');
