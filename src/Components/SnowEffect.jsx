import React, { useCallback } from 'react';
import Particles from 'react-particles';
import { loadSlim } from "tsparticles-slim";

function SnowEffect() {
const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadSlim(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);


return (
<Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#fff",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#e91e63",
                    },
                    move: {
                        direction: "bottom",
                        enable: true,
                        outMode: "out",
                        random: false,
                        speed: 1,
                        straight: false,
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200,
                        }
                    },
                    number: {
                        value: 150,
                        density: {
                            enable: true,
                            value_area: 800,
                        },
                    },
                    opacity: {
                        value: 0.5,
                        random:true,
                        anim: {
                            enable: false,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false
                        },
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: 5,
                        random: true,
                    },
                    interactivity: {
                        events: {
                            onhover: {
                                enable: true,
                                mode: "repulse",
                            }
                        }
                    }
                },
                retina_detect: true,
            }}
        />);
};

export default SnowEffect;
