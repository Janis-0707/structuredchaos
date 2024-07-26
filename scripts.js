document.addEventListener('DOMContentLoaded', function() {
    const butterfly = document.querySelector('#section1 img');
    if (butterfly) {
        butterfly.style.transition = 'transform 2s ease-in-out';
        butterfly.style.transform = 'translateY(20px)';

        butterfly.addEventListener('mouseover', () => {
            butterfly.style.transform = 'translateY(0)';
        });

        butterfly.addEventListener('mouseout', () => {
            butterfly.style.transform = 'translateY(20px)';
        });
    }

    const text = `Structured Chaos is a creative collective and philosophy,
where the interplay of structure and chaos forms a seamless dance,
inspiring boundless creativity. Continuously evolving, it breaks boundaries
and thrives on spontaneity and disorder. Shaped by passionate creators,
Structured Chaos urges you to embrace the unknown and to utilize your creative potential.
This living, breathing entity celebrates the miracle of human resourcefulness,
encouraging to live in the present and to craft your imagination into reality.`;

    let index = 0;
    const speed = 50;
    const textElement = document.getElementById('structured-chaos-text');

    function typeWriter() {
        if (index < text.length) {
            textElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
});

