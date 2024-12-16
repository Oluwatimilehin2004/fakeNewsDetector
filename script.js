const toggleModeBtn= document.getElementById('toggleMode__Btn')
const mainBody= document.getElementById('main_body')
const submitSection= document.getElementById('submissionSection')
const urlMode= document.getElementById('url_mode')
const fileMode= document.getElementById('file_mode')
const textMode= document.getElementById('text_mode')
const toggleBtn = document.getElementById('toggle-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');

// Open sidebar
toggleBtn.addEventListener('click', () => {
sidebar.classList.remove('-translate-x-full');
});

// Close sidebar
closeBtn.addEventListener('click', () => {
sidebar.classList.add('-translate-x-full');
});

const changeTheme= (currentTheme) => {
    const imgElement= toggleModeBtn.firstElementChild
    currentTheme == 'light'
    if(currentTheme == 'dark'){
        imgElement.setAttribute('src', './assets/sun.png')
    }else{
        imgElement.setAttribute('src', './assets/moon.png')
    }

    mainBody.classList.toggle('bg-black')   
    mainBody.classList.toggle('text-white')
    

    localStorage.setItem('state', currentTheme)
}

const theme= localStorage.getItem('state');
    if(theme == 'dark'){
        changeTheme('dark')
    }

toggleModeBtn.addEventListener('click', () => {
    const currentTheme= localStorage.getItem('state')
    changeTheme(currentTheme == null || currentTheme == 'light' ? 'dark' : 'light') 
})


const changeState= (currentState) => {
    if(currentState == 'file'){
        submitSection.innerHTML= `
        <label 
                    for="file-upload" 
                    class="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors p-6 text-center mt-3">
                    <svg class="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V12M7 12V8m0 4H3m4 0h4M7 20a1 1 0 001-1v-4m4-4h4m-4 0h4m0 0v4m0-4v-4a1 1 0 011-1h4m-4 0V4a1 1 0 00-1-1h-4M3 16a1 1 0 001-1v-4a1 1 0 011-1h4"></path>
                    </svg>
                    <p class="text-gray-500">Drag and drop file here</p>
                    <p class="text-sm text-gray-400">Limit 200MB per file • DOCX</p>
                    <button 
                        type="button" 
                        class="mt-4 px-4 py-2 bg-gray-200 text-gray-700 font-semibold rounded hover:bg-gray-300 transition-colors">
                        Browse files
                    </button>
                   
                    <input id="file-upload" type="file" class="hidden" />
                </label> 

                <button 
                 class="px-4 py-1.5 border border-gray-200 rounded-md mt-3">Verify</button>`
    }else if(currentState == 'text'){
        submitSection.innerHTML= `
        <label>
                     <p class="pt-5 pb-3 text-[12px] text-gray-400 lg:text-[19px]">Input a valid url....</p>
                     <textarea name="" id="" class="border w-full lg:[65%] bg-gray-200 rounded-md h-20 lg:h-40 p-4 outline-none"></textarea>

                     <button 
                 class="px-4 py-1.5 border border-gray-200 rounded-md mt-3">Verify</button>
                 </label>`
    }else{
        submitSection.innerHTML=`
        <label>
                     <p class="text-[12px] text-gray-400 lg:text-[19px]">Input a valid url....</p>
                     <input class="bg-gray-200 w-full h-8 rounded-md mt-2 lg:h-10 p-4 outline-none" type="text">
                 </label>

                 <button 
                 class="px-4 py-1.5 border border-gray-200 rounded-md mt-3">Verify</button>`
    }

    localStorage.setItem('structure', currentState)
}
 
const currentState= localStorage.getItem('structure')
    if(currentState == 'url'){
        changeState('url')
    }

    urlMode.addEventListener('click', () => {
        let currentState = 'url'; // Set the desired state
        localStorage.setItem('structure', currentState); // Save to localStorage
        changeState(currentState); // Call the changeState function to update the UI
    });
    
    fileMode.addEventListener('click', () => {
        let currentState = 'file'; // Declare currentState properly
        localStorage.setItem('structure', currentState); // Save to localStorage
        changeState(currentState); // Call the changeState function to update the UI
    });
    
    textMode.addEventListener('click', () => {
        let currentState = 'text'; // Declare currentState properly
        localStorage.setItem('structure', currentState); // Save to localStorage
        changeState(currentState); // Call the changeState function to update the UI
    });
    