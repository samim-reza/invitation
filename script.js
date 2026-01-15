// List of all invited names
const invitedNames = [
    'romim', 'রমিম',
    'ela', 'ইলা',
    'noim', 'shamim', 'শামীম', 'rakib', 'রাকিব',
    'mou', 'মৌ', 'maria', 'মারিয়া',
    'yousuf', 'ইউসুফ', 'sazib', 'সজীব', 'juwel', 'jewel', 'জুয়েল', 'sony', 'সনি', 'bulbul', 'বুলবুল',
    'neel', 'নীল',
    'soya', 'choa', 'ছোঁয়া', 'ছোয়া',
    'ataull', 'আতাউল্লাহ', 'fahim', 'ফাহিম',
    'tahsin', 'তাহসিন', 'rumman', 'রুম্মান', 'sifat', 'সিফাত',
    'razeen', 'রাজীন', 'rameen', 'রামীন', 'galib', 'গালিব',
    'arafat', 'আরাফাত', 'nahian', 'নাহিয়ান', 'reza', 'রেজা',
    'nurul', 'নুরুল', 'zahin', 'জাহিন', 'jubayer', 'জুবায়ের',
    'sarwar', 'সারওয়ার', 'rahim', 'রহিম', 'mursalin', 'মুরসালিন',
    'tanveer', 'তানভীর', 'apurba', 'অপূর্ব', 'nayeem', 'নাঈম',
    'sadib', 'সাদিব', 'noyon', 'নয়ন', 'pranto', 'প্রান্ত',
    'raib', 'রায়েব', 'suaeb', 'সুয়েব', 'asif', 'আসিফ',
    'umme ruman', 'উম্মে রুমান'
];

// Function to get personalized greeting based on name
function getPersonalizedGreeting(name) {
    const nameLower = name.toLowerCase().trim();
    
    // Formal pronouns (for elders, sir)
    const formal = {
        greeting: '',
        acho: 'আছেন',
        tomake: 'আপনাকে',
        tomar: 'আপনার',
        asbe: 'আসবেন'
    };
    
    // Informal pronouns (for friends, siblings)
    const informal = {
        greeting: '',
        acho: 'আছো',
        tomake: 'তোমাকে',
        tomar: 'তোমার',
        asbe: 'আসবে'
    };
    
    // Check for specific names using substring matching
    if (nameLower.includes('romim') || nameLower.includes('রমিম')) {
        informal.greeting = `প্রিয় ভাই,`;
        return informal;
    } 
    else if (nameLower.includes('ইলা') || nameLower.includes('ela')) {
        informal.greeting = `প্রিয় ভাবি,`;
        return informal;
    } 
    else if (nameLower.includes('noim')  || nameLower.includes('শামীম') || nameLower.includes('shamim')  || nameLower.includes('rakib')  || nameLower.includes('রাকিব')) {
        formal.greeting = `প্রিয় ভাই,`;
        return formal;
    }
    else if (nameLower.includes('mou') || nameLower.includes('মৌ') || nameLower.includes('maria') || nameLower.includes('মারিয়া')) {
        informal.greeting = `প্রিয় মৌ আন্টি,`;
        return informal;
    } 
    else if (nameLower.includes('ইউসুফ') || nameLower.includes('yousuf') || nameLower.includes('sazib') || nameLower.includes('সজীব') || nameLower.includes('জুয়েল') || nameLower.includes('juwel') || nameLower.includes('sony') || nameLower.includes('সনি') || nameLower.includes('bulbul') || nameLower.includes('বুলবুল') || nameLower.includes('jewel')) {
        informal.greeting = `প্রিয় মামা,`;
        return informal;
    }
    else if (nameLower.includes('নীল') || nameLower.includes('neel')) {
        formal.greeting = `প্রিয় মামা,`;
        return formal;
    }
    else if (nameLower.includes('ছোঁয়া') || nameLower.includes('ছোয়া') || nameLower.includes('soya') || nameLower.includes('choa')) {
        informal.greeting = `প্রিয় বোন,`;
        return informal;
    }
    else if (nameLower.includes('আতাউল্লাহ') || nameLower.includes('ataull') || nameLower.includes('ফাহিম') || nameLower.includes('fahim')) {
        formal.greeting = `প্রিয় স্যার,`;
        return formal;
    }
    else if (nameLower.includes('umme ruman') || nameLower.includes('উম্মে') || nameLower.includes('ruman') || nameLower.includes('রুমান')) {
        formal.greeting = `প্রিয় ম্যাম,`;
        return formal;
    }
    // Friends list
    else if (nameLower.includes('tahsin') || nameLower.includes('তাহসিন') || 
             nameLower.includes('rumman') || nameLower.includes('রুম্মান') || 
             nameLower.includes('sifat') || nameLower.includes('সিফাত') || 
             nameLower.includes('razeen') || nameLower.includes('রাজীন') || 
             nameLower.includes('rameen') || nameLower.includes('রামীন') || 
             nameLower.includes('galib') || nameLower.includes('গালিব') || 
             nameLower.includes('arafat') || nameLower.includes('আরাফাত') || 
             nameLower.includes('nahian') || nameLower.includes('নাহিয়ান') || 
             nameLower.includes('reza') || nameLower.includes('রেজা') || nameLower.includes('reja') ||
             nameLower.includes('nurul') || nameLower.includes('নুরুল') || 
             nameLower.includes('zahin') || nameLower.includes('জাহিন') || 
             nameLower.includes('jubayer') || nameLower.includes('জুবায়ের') || 
             nameLower.includes('sarwar') || nameLower.includes('সারওয়ার') || 
             nameLower.includes('rahim') || nameLower.includes('রহিম') || 
             nameLower.includes('mursalin') || nameLower.includes('মুরসালিন') || 
             nameLower.includes('tanveer') || nameLower.includes('তানভীর') || 
             nameLower.includes('apurba') || nameLower.includes('অপূর্ব') || 
             nameLower.includes('nayeem') || nameLower.includes('নাঈম') || 
             nameLower.includes('sadib') || nameLower.includes('সাদিব') || 
             nameLower.includes('noyon') || nameLower.includes('নয়ন') || 
             nameLower.includes('pranto') || nameLower.includes('প্রান্ত') || 
             nameLower.includes('rakib') || nameLower.includes('রাকিব') || 
             nameLower.includes('suaeb') || nameLower.includes('সুয়েব') || 
             nameLower.includes('asif') || nameLower.includes('আসিফ')) {
        informal.greeting = `প্রিয় বন্ধু,`;
        return informal;
    }
    // Not invited
    else {
        return null;
    }
}


// Function to show invitation with personalized greeting
function showInvitation(nickname) {
    // Generate personalized greeting and pronouns
    const data = getPersonalizedGreeting(nickname);
    
    // Check if person is not in invitation list
    if (data === null) {
        const errorMessage = document.getElementById('errorMessage');
        errorMessage.textContent = 'দুঃখিত, আপনি আমন্ত্রণ তালিকায় নেই। (Sorry, you are not in the invitation list.)';
        errorMessage.style.display = 'block';
        document.getElementById('nicknameInput').classList.add('error');
        return;
    }
    
    // Display the greeting in the invitation
    document.getElementById('greeting').textContent = data.greeting;
    
    // Update pronouns throughout the letter
    document.getElementById('acho').textContent = data.acho;
    document.getElementById('tomake').textContent = data.tomake;
    document.getElementById('tomar').textContent = data.tomar;
    document.getElementById('asbe').textContent = data.asbe;
    
    // Hide input form and show invitation with animation
    document.getElementById('inputContainer').style.display = 'none';
    document.getElementById('invitationContainer').style.display = 'flex';
}

// Handle form submission
function handleSubmit() {
    const input = document.getElementById('nicknameInput');
    const errorMessage = document.getElementById('errorMessage');
    const nickname = input.value.trim();
    
    if (nickname === '') {
        errorMessage.style.display = 'block';
        input.classList.add('error');
        return;
    }
    
    // Hide error if shown
    errorMessage.style.display = 'none';
    input.classList.remove('error');
    
    // Show invitation
    showInvitation(nickname);
}

// Run when page loads
window.addEventListener('load', function() {
    const submitBtn = document.getElementById('submitBtn');
    const input = document.getElementById('nicknameInput');
    const suggestionsBox = document.getElementById('suggestions');
    
    // Function to show suggestions
    function showSuggestions(value) {
        const inputValue = value.toLowerCase().trim();
        
        if (inputValue === '') {
            suggestionsBox.innerHTML = '';
            suggestionsBox.style.display = 'none';
            return;
        }
        
        // Filter names that match the input
        const matches = invitedNames.filter(name => 
            name.toLowerCase().includes(inputValue)
        );
        
        // Remove duplicates and limit to 8 suggestions
        const uniqueMatches = [...new Set(matches)].slice(0, 8);
        
        if (uniqueMatches.length > 0) {
            suggestionsBox.innerHTML = uniqueMatches
                .map(name => `<div class="suggestion-item">${name}</div>`)
                .join('');
            suggestionsBox.style.display = 'block';
        } else {
            suggestionsBox.innerHTML = '';
            suggestionsBox.style.display = 'none';
        }
    }
    
    // Handle input changes
    input.addEventListener('input', function() {
        document.getElementById('errorMessage').style.display = 'none';
        input.classList.remove('error');
        showSuggestions(this.value);
    });
    
    // Handle clicking on a suggestion
    suggestionsBox.addEventListener('click', function(e) {
        if (e.target.classList.contains('suggestion-item')) {
            input.value = e.target.textContent;
            suggestionsBox.innerHTML = '';
            suggestionsBox.style.display = 'none';
            input.focus();
        }
    });
    
    // Hide suggestions when clicking outside
    document.addEventListener('click', function(e) {
        if (e.target !== input && e.target.parentElement !== suggestionsBox) {
            suggestionsBox.style.display = 'none';
        }
    });
    
    // Handle button click
    submitBtn.addEventListener('click', handleSubmit);
    
    // Handle Enter key press
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    });
    
    // Focus on input
    input.focus();
});