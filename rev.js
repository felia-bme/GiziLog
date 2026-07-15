// function renderProfileList() {
//   const listContainer = document.getElementById('profile-list');
//   const profiles = getAllProfiles(); // Your existing function

//   if (profiles.length === 0) {
//     listContainer.innerHTML = '<p class="text-gray-400 text-sm text-center py-6">Belum ada data</p>';
//     return;
//   }

//   listContainer.innerHTML = profiles.map(profile => {
//     // Check if this row is the one currently selected
//     const isSelected = profile.id === selectedProfileId;
    
//     return `
//       <div onclick="selectProfile(${profile.id})" 
//            class="p-3 hover:bg-gray-50 cursor-pointer transition-colors flex justify-between items-center ${isSelected ? 'bg-blue-50 font-semibold' : ''}">
//         <div>
//           <p class="text-gray-800 text-sm">${profile.name} (${profile.gender})</p>
//           <p class="text-xs text-gray-500">W: ${profile.weight}kg | H: ${profile.height}cm</p>
//         </div>
//       </div>
//     `;
//   }).join('');
// }