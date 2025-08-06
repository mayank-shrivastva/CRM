
document.addEventListener('DOMContentLoaded', () => {
  // Toggle dropdown menus (already added by you)
  const workoutToggle = document.getElementById('workoutToggle');
  const workoutMenu = document.getElementById('workoutMenu');
  const workoutArrow = document.getElementById('workoutArrow');

  const dietToggle = document.getElementById('dietToggle');
  const dietMenu = document.getElementById('dietMenu');
  const dietArrow = document.getElementById('dietArrow');

  workoutToggle?.addEventListener('click', () => {
    const isHidden = workoutMenu.classList.contains('hidden');
    workoutMenu.classList.toggle('hidden');
    workoutArrow.classList.toggle('rotate-180', isHidden);
  });

  dietToggle?.addEventListener('click', () => {
    const isHidden = dietMenu.classList.contains('hidden');
    dietMenu.classList.toggle('hidden');
    dietArrow.classList.toggle('rotate-180', isHidden);
  });

  // ======= Modal Logic =======
  const editModal = document.getElementById('editModal');
  const closeModalBtn = document.getElementById('closeEditModalBtn');
  const editForm = document.getElementById('editEmployeeForm');

  // Function to open modal (you can call this when edit button is clicked)
  window.openEditModal = function () {
    editModal.classList.remove('hidden');
  };

  // Function to close modal
  window.closeEditModal = function () {
    editModal.classList.add('hidden');
  };

  // Close modal on cross click
  closeModalBtn?.addEventListener('click', () => {
    closeEditModal();
  });

  // Optional: Close modal on form submit (simulate update)
  editForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    // You can put your update logic here (e.g., API call)
    closeEditModal();
  });
});

