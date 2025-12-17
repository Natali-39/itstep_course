import rand from './rand';
import options from './options';
import '../scss/snowanime.scss';
import Flake from './flake';


setInterval(() => {
    let flake = new Flake(
        options.fonts[rand(0, options.fonts.length)],
        rand(0, options.maxWidth - 120),
        -20,
        options.flakes[rand(0, options.flakes.length)]
    );

    flake.draw();
    flake.move(options.speeds[rand(0, options.speeds.length)]);
}, 100);

