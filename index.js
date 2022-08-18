import barba from 'https://unpkg.com/@barba/core@2.9.7/dist/barba.mjs';
import barbaCss from 'https://unpkg.com/@barba/css@2.1.15/dist/barba-css.mjs';
//Run animation

barba.init({
    transitions: [
        {
            name: "default",
            leave(data){
                console.log(data);
            }
        }
    ]
})