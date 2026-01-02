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
    // Default greeting for any other name
    else {
        informal.greeting = `প্রিয় ${name},`;
        return informal;
    }
}


// Function to show invitation with personalized greeting
function showInvitation(nickname) {
    // Generate personalized greeting and pronouns
    const data = getPersonalizedGreeting(nickname);
    
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
    
    // Handle button click
    submitBtn.addEventListener('click', handleSubmit);
    
    // Handle Enter key press
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    });
    
    // Hide error message when user starts typing
    input.addEventListener('input', function() {
        document.getElementById('errorMessage').style.display = 'none';
        input.classList.remove('error');
    });
    
    // Focus on input
    input.focus();
});