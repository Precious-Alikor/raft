import { gsap } from "gsap";

import ScrollTrigger from "gsap/ScrollTrigger";
import Flip from 'gsap/Flip';
import Draggable from "gsap/Draggable";

import { gsap,ScrollTrigger, Draggable,MotionPathPlugin} from "gsap/all";

if (process.client) {
  gsap.registerPlugin(Draggable,ScrollTrigger);
}