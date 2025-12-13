// Function to get personalized greeting based on name
function getPersonalizedGreeting(name) {
    const nameLower = name.toLowerCase().trim();
    
    // Check for specific names using substring matching
    if ( nameLower.includes('noim') ||  nameLower.includes('shamim') || nameLower.includes('rakib') || nameLower.includes('romim')) {
        return `প্রিয় ভাই,`;
    } 
    else if (nameLower.includes('মৌ') || nameLower.includes('mou')) {
        return `প্রিয় মৌ আন্টি ,`;
    }
    else if (nameLower.includes('ইউসুফ') || nameLower.includes('yousuf') || nameLower.includes('sazib') || nameLower.includes('সজীব') || nameLower.includes('জুয়েল') || nameLower.includes('juwel') || nameLower.includes('sony') || nameLower.includes('সনি') || nameLower.includes('নীল') || nameLower.includes('neel') || nameLower.includes('bulbul') || nameLower.includes('বুলবুল')) {
        return `প্রিয় মামা,`;
    }
    else if (nameLower.includes('ছোঁয়া') || nameLower.includes('ছোয়া') || nameLower.includes('soya')) {
        return `প্রিয় বোন,`;
    }
    else if (nameLower.includes('আতাউল্লাহ') || nameLower.includes('ataull')) {
        return `প্রিয় স্যার,`;
    }
    // else if (nameLower.includes('ফারহান') || nameLower.includes('farhan')) {
    //     return `প্রিয় ফারহান,`;
    // }
    // else if (nameLower.includes('তাহসিন') || nameLower.includes('tahsin')) {
    //     return `প্রিয় তাহসিন,`;
    // }
    // else if (nameLower.includes('রাফি') || nameLower.includes('rafi')) {
    //     return `প্রিয় রাফি,`;
    // }
    // else if (nameLower.includes('সাদিক') || nameLower.includes('sadiq')) {
    //     return `প্রিয় সাদিক,`;
    // }
    // else if (nameLower.includes('ইমরান') || nameLower.includes('imran')) {
    //     return `প্রিয় ইমরান,`;
    // }
    // Check if name ends with common Bengali name patterns
    // else if (nameLower.endsWith('উল') || nameLower.endsWith('ul')) {
    //     return `প্রিয় ${name},`;
    // }
    // else if (nameLower.endsWith('আহ') || nameLower.endsWith('ah')) {
    //     return `প্রিয় ${name},`;
    // }
    // Default greeting for any other name
    else {
        return `প্রিয় ${name},`;
    }
}


// Function to show invitation with personalized greeting
function showInvitation(nickname) {
    // Generate personalized greeting
    const greeting = getPersonalizedGreeting(nickname);
    
    // Display the greeting in the invitation
    document.getElementById('greeting').textContent = greeting;
    
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