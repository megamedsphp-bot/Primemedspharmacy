// Simple JavaScript for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// Checkout modal functionality
function openCheckout(packageName, price, pills) {
    document.getElementById('selectedPackage').textContent = `You've selected: ${packageName} - $${price} for ${pills} pills`;
    document.getElementById('checkoutModal').style.display = 'flex';
}

function closeCheckout() {
    document.getElementById('checkoutModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('checkoutModal');
    if (event.target === modal) {
        closeCheckout();
    }
}

// Form submission
document.getElementById('checkoutForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your order! A representative will contact you shortly to confirm your details and complete your health consultation.');
    closeCheckout();
});

// FAQ toggle functionality
function toggleFaq(element) {
    const faqItem = element.parentElement;
    faqItem.classList.toggle('faq-active');
    
    // Toggle icon
    const icon = element.querySelector('i');
    if (faqItem.classList.contains('faq-active')) {
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
    } else {
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
    }
}

// Medication tab functionality
function changeMedTab(tabName) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Show selected tab
    document.getElementById(tabName).classList.add('active');
    
    // Update tab navigation
    document.querySelectorAll('.medication-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Activate the clicked tab (find by onclick attribute)
    document.querySelectorAll('.medication-tab').forEach(tab => {
        if (tab.getAttribute('onclick') === `changeMedTab('${tabName}')`) {
            tab.classList.add('active');
        }
    });
}