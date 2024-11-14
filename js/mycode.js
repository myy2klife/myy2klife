//window.alert("ayudaaaaa");

function animatePath() {
      const tween = KUTE.fromTo(
        '#strike',
        { draw: '0% 0%' },
        { draw: '0% 100%' },
        { duration: 3000, easing: 'easingQuadraticInOut' }
      );
      tween.start();
    }

    window.onload = animatePath;


