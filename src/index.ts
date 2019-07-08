
import {ready} from './utils'

const pronounce = "https://www.names.org/speak.php?say=Gwilyn&voice=Joanna";

ready.on(".pronounce", "click", () => {
    new Audio(pronounce).play();
});
