const toggleBtn = document.querySelector('.sidebar-toggle')
const closeBtn = document.querySelector('.close-btn')
const sidebar = document.querySelector('.sidebar')

const toggleSidebar = () => {
    sidebar.classList.toggle('show-sidebar')
}

const closeSidebar = () => {
    if(sidebar.classList.contains('show-sidebar')){
        sidebar.classList.remove('show-sidebar')
    }
}

toggleBtn.addEventListener('click', toggleSidebar)
closeBtn.addEventListener('click', closeSidebar)