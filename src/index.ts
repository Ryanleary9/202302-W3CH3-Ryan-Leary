import { Header } from './components/header/header';
import { Tasks } from './components/tasks/task';
import { PET } from './mocks/mockpets';
import { Footer } from './components/footer/footer';
import './index.scss';
import { addPet } from './components/addPet/add';

console.log('Load sample.');
new Header('#root');
new Tasks('main', PET);
new addPet('main');
new Footer('#footer');
