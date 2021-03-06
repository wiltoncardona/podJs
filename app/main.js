import { App } from './app';
import { Router } from './router';

import { NavBar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { Home } from './components/home/home';
import { Team } from './components/team/team';
import { Person } from './components/team/person/person';
import { MisionVision } from './components/misionvision/misionVision';
import { ContactUs } from './components/contactus/contactus';

import { Canvas } from './components/logocanvas/canvas';
import { Robot } from './components/logocanvas/robot';



const app = new App();
const router = new Router(app);

app.addNavBar(new NavBar());
app.addFooter(new Footer());

app.addComponent(new Home());
app.addComponent(new Team());
app.addComponent(new Person());
app.addComponent(new MisionVision());
app.addComponent(new ContactUs(app));


const canvas = new Canvas(125,145,'canvas');
const robot = new Robot(canvas.getCanvas(),canvas.getContext());



router.addRoute('home', '^$');
router.addRoute('home', '^#/home$');

router.addRoute('team', '^#/team$');
router.addRoute('teamperson', '^#/team/([0-9]*)$');

router.addRoute('misionVision', '^#/mision$');
router.addRoute('contactus', '^#/contactus$');



