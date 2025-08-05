document.addEventListener('DOMContentLoaded', () => {
  const workoutToggle = document.getElementById('workoutToggle');
  const workoutMenu = document.getElementById('workoutMenu');
  const workoutArrow = document.getElementById('workoutArrow');

  const dietToggle = document.getElementById('dietToggle');
  const dietMenu = document.getElementById('dietMenu');
  const dietArrow = document.getElementById('dietArrow');

  workoutToggle.addEventListener('click', () => {
    const isHidden = workoutMenu.classList.contains('hidden');
    if (isHidden) {
      workoutMenu.classList.remove('hidden');
      workoutArrow.classList.add('rotate-180');
    } else {
      workoutMenu.classList.add('hidden');
      workoutArrow.classList.remove('rotate-180');
    }
  });

  dietToggle.addEventListener('click', () => {
    const isHidden = dietMenu.classList.contains('hidden');
    if (isHidden) {
      dietMenu.classList.remove('hidden');
      dietArrow.classList.add('rotate-180');
    } else {
      dietMenu.classList.add('hidden');
      dietArrow.classList.remove('rotate-180');
    }
  });
});
