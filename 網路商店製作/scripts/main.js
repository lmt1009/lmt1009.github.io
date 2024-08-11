// 側邊欄顯示與隱藏功能
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const menuBtn = document.getElementById('menu-btn');
    const menuIcon = document.getElementById('menu-icon');
    if (sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
        menuBtn.classList.remove('hidden'); // Show menu button
      } else {
        sidebar.classList.add('active');
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-xmark');
        menuBtn.classList.add('hidden'); // Hide menu button
      }
}

// 點擊空白處關閉側邊欄
document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    const menuBtn = document.getElementById('menu-btn');
    const menuIcon = document.getElementById('menu-icon');

    // 如果側邊欄是打開的，並且點擊的地方不是側邊欄或按鈕，則關閉側邊欄
    if (sidebar.classList.contains('active') && !sidebar.contains(event.target) && !menuBtn.contains(event.target)) {
        sidebar.classList.remove('active');
        menuIcon.classList.remove('fa-xmark'); // 切換回漢堡圖標
        menuIcon.classList.add('fa-bars');
        menuBtn.classList.remove('hidden'); // 確保按鈕顯示
    }
});

  